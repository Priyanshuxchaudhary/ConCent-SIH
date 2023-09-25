// VoiceChat.js
import React, { useState, useEffect } from 'react';
import Video, { LocalVideoTrack, LocalAudioTrack, connect, createLocalVideoTrack, createLocalAudioTrack } from 'twilio-video';

function VoiceChat() {
  const [roomName, setRoomName] = useState('');
  const [localTracks, setLocalTracks] = useState([]);
  const [room, setRoom] = useState(null);

  useEffect(() => {
    const initialize = async () => {
      try {
        const audioTrack = await createLocalAudioTrack();
        setLocalTracks([audioTrack]);
      } catch (error) {
        console.error('Error initializing audio:', error);
      }
    };
    initialize();
  }, []);

  const joinRoom = async () => {
    try {
      const videoTokenResponse = await fetch('/create-room', { method: 'POST' });
      const videoTokenData = await videoTokenResponse.json();
      const { accessToken } = videoTokenData;

      const tracks = await createLocalAudioTrack();
      setLocalTracks([tracks]);

      const newRoom = await connect(accessToken, {
        name: roomName,
        audio: true, // Enable audio
        video: false, // Disable video
        tracks: localTracks,
      });

      setRoom(newRoom);
    } catch (error) {
      console.error('Error joining room:', error);
    }
  };

  const leaveRoom = () => {
    if (room) {
      room.disconnect();
      setRoom(null);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Room Name"
        value={roomName}
        onChange={(e) => setRoomName(e.target.value)}
      />
      {room ? (
        <button onClick={leaveRoom}>Leave Room</button>
      ) : (
        <button onClick={joinRoom}>Join Room</button>
      )}
      {localTracks && (
        <div>
          <p>You are connected to room: {roomName}</p>
          <LocalAudioTrack publication={localTracks[0]} />
        </div>
      )}
    </div>
  );
}

export default VoiceChat;
