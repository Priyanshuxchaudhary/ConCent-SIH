import React, { useState } from "react";
import { Box, useTheme } from "@mui/material";
import { useGetCustomersQuery ,useAddCustomerMutation} from "state/api";
import Header from "components/Header";
import { DataGrid } from "@mui/x-data-grid";
import DataGridCustomToolbar from "components/DataGridCustomToolbar";

import axios from 'axios';
const Customers = () => {
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(20);
  const [sort, setSort] = useState({});
  const [search, setSearch] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const { data, isLoading } = useGetCustomersQuery({
    page,
    pageSize,
    sort: JSON.stringify(sort),
    search,
  });
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const [prince,setPrince]=useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('localhost:8000', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
    
        console.log(response.data);
        setPrince(response.data);
        console.log("princd ",prince);
      

  
      // Handle the response data as needed
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  
  };

  const [isNewCustomerClicked, setIsNewCustomerClicked] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password:"",
    city:"",
    state:"",
    country: "",
    occupation: "",
    phoneNumber: "",
    score: "",
    sentiments: "",
    followup: "",
    transactions:[],
    role:"",
  });

  const [addCustomer, { isLoading: isAddingCustomer }] = useAddCustomerMutation();

  const handleCreateNewCustomerClick = () => {
    setIsNewCustomerClicked(!isNewCustomerClicked);
  };

  const handleSaveClick = async () => {
    try {
      console.log(formData);
      // Call the API to add a new customer with formData
      const response = await addCustomer(formData);

      // Check if the customer was added successfully
      if (response.error) {
        // Handle the error (e.g., show an error message)
        console.error("Error adding customer:", response.error.message);
      } else {
        // Clear the form data and refresh the customer data
        setFormData({
          _id: "",
          name: "",
          email: "",
          phoneNumber: "",
          country: "",
          occupation: "",
          score: "",
          sentiments: "",
          followup: "",
        });

        // // Manually refetch customer data to update the grid
        // await queryClient.invalidateQueries("Customers");
      }
    } catch (error) {
      console.error("Error adding customer:", error.message);
    }
  };

  const theme = useTheme();

  const columns = [
    {
      field: "_id",
      headerName: "ID",
      flex: 1,
    },
    {
      field: "name",
      headerName: "Name",
      flex: 0.5,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "phoneNumber",
      headerName: "Phone Number",
      flex: 0.5,
      renderCell: (params) => {
        return params.value.replace(/^(\d{3})(\d{3})(\d{4})/, "($1)$2-$3");
      },
    },
    {
      field: "country",
      headerName: "Country",
      flex: 0.4,
    },
    {
      field: "occupation",
      headerName: "Occupation",
      flex: 1,
    },
    {
      field: "score",
      headerName: "Score",
      flex: 0.5,
    },
    {
      field: "sentiments",
      headerName: "Sentiment",
      flex: 0.5,
    },
    {
      field: "followup",
      headerName: "Follow-Up",
      flex: 0.5,
    },
  ];


  // useEffect(() => {
  //   console.log("prince", prince);
  // }, [prince]);
  return (
    <Box m="1.5rem 2.5rem">
      <div className="flex">
        <Header title="CUSTOMERS" subtitle="List of Customers" />
        <button
          onClick={handleCreateNewCustomerClick}
          className="ml-4 bg-transparent hover:bg-blue-500 text-blue-700 font-extrabold hover:text-white py-0 px-2 border text-base border-blue-500 hover:border-transparent rounded"
        >
          Add New Customer
        </button>
        {isNewCustomerClicked && (
          <button
            onClick={handleSaveClick}
            disabled={isAddingCustomer}
            className="ml-4 bg-transparent hover:bg-green-500 text-green-700 font-extrabold hover:text-white py-0 px-4 border text-base border-green-500 hover:border-transparent rounded"
          >
            {isAddingCustomer ? "Adding..." : "Save"}
          </button>
        )}
      </div>
      {isNewCustomerClicked && (
        <div>
          <form className="text-white pt-4">
            
            <input
              className="bg-slate-500 m-3 p-2"
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            <input
              className="bg-slate-500 m-3 p-2"
              type="text"
              placeholder="Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            {

            }
            <input
              className="bg-slate-500 m-3 p-2"
              type="text"
              placeholder="City"
              value={formData.city}
              onChange={(e) =>
                setFormData({ ...formData, city: e.target.value })
              }
            />
            <input
              className="bg-slate-500 m-3 p-2"
              type="text"
              placeholder="State"
              value={formData.state}
              onChange={(e) =>
                setFormData({ ...formData, state: e.target.value })
              }
            />
            <input
              className="bg-slate-500 m-3 p-2"
              type="text"
              placeholder="Country"
              value={formData.country}
              onChange={(e) =>
                setFormData({ ...formData, country: e.target.value })
              }
            />
            <input
              className="bg-slate-500 m-3 p-2"
              type="text"
              placeholder="Occupation"
              value={formData.occupation}
              onChange={(e) =>
                setFormData({ ...formData, occupation: e.target.value })
              }
            />
            <input
              className="bg-slate-500 m-3 p-2"
              type="text"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={(e) =>
                setFormData({ ...formData, phoneNumber: e.target.value })
              }
            />
            <input
              className="bg-slate-500 m-3 p-2"
              type="text"
              placeholder="Score"
              value={formData.score}
              onChange={(e) =>
                setFormData({ ...formData, score: e.target.value })
              }
            />
            <input
              className="bg-slate-500 m-3 p-2"
              type="text"
              placeholder="Sentiment"
              value={formData.sentiments}
              onChange={(e) =>
                setFormData({ ...formData, sentiments: e.target.value })
              }
            />
            <input
              className="bg-slate-500 m-3 p-2"
              type="text"
              placeholder="Follow-Up"
              value={formData.followup}
              onChange={(e) =>{
                setFormData({ ...formData, followup: e.target.value })
              }}
            />
            
          </form>
          {isNewCustomerClicked && (
            // <button
            //   className="ml-2 bg-transparent hover:bg-green-500 text-green-700 font-extrabold hover:text-white py-2 px-4 border text-base border-green-500 hover:border-transparent rounded"
            // >
            //   Analyze
            // </button>
            <div>
            <h2>Upload Audio File</h2>
            <form onSubmit={handleSubmit}>
              <input type="file" accept=".wav" onChange={handleFileChange} />
              <button type="submit">Upload</button>
            </form>
          </div>
          )}

          {
            prince==null?(<></>):(<div>
              <h1 className="   font-bold">Transcript text:{prince.Transcribed_Text}</h1>
              <h1 className="font-bold">Sentiment_Label:{prince.Sentiment_Label}</h1>
              <h2 className="font-bold">Sentiment_Score:{prince.Sentiment_Score}</h2>
             
            </div>)
          }
        
        </div>
      )}
      <Box
        mt="40px"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: theme.palette.primary.light,
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderTop: "none",
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${theme.palette.secondary[200]} !important`,
          },
        }}
      >
        <DataGrid
          loading={isLoading || !data}
          getRowId={(rows) => rows._id}
          rows={(data && data.users) || []}
          columns={columns}
          rowCount={(data && data.total) || 0}
          rowsPerPageOptions={[20, 50, 100]}
          pagination
          page={page}
          pageSize={pageSize}
          paginationMode="server"
          sortingMode="server"
          onPageChange={(newPage) => setPage(newPage)}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          onSortModelChange={(newSortModel) => setSort(...newSortModel)}
          components={{ Toolbar: DataGridCustomToolbar }}
          componentsProps={{
            toolbar: { searchInput, setSearchInput, setSearch },
          }}
        />
      </Box>
    </Box>
  );
};

export default Customers;