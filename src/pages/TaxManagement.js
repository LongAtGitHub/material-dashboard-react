import React, { useState } from "react";
import {
  Container,
  Paper,
  Typography,
  TextField,
  Select,
  MenuItem,
  Button,
  Grid,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { DatePicker } from "@mui/lab"; // DatePicker component for date selection
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Tables from "layouts/tables";
import Footer from "layoutComponents/Footer";

import ExampleTable from "examples/Tables/DataTable";

function TaxManagement() {
  const [memberName, setMemberName] = useState("");
  const [selectedMember, setSelectedMember] = useState(null);
  const [dateRange, setDateRange] = useState([null, null]);
  const [donationCategory, setDonationCategory] = useState("");
  const [openDialog, setOpenDialog] = useState(false);
  const [generatedReceipt, setGeneratedReceipt] = useState(null);

  const handleSearchMember = () => {
    // Fetch member info based on search criteria
    setSelectedMember({ name: memberName, totalDonations: 5000 }); // Example data
  };

  const handleGenerateReceipt = () => {
    // Generate the receipt based on member and criteria
    const receipt = {
      memberName: selectedMember?.name,
      totalAmount: selectedMember?.totalDonations,
      dateRange,
      donationCategory,
    };
    setGeneratedReceipt(receipt);
    setOpenDialog(true);
  };

  return (
    <DashboardLayout>
      <Paper elevation={3} sx={{ padding: 3 }}>
        <Typography variant="h4" gutterBottom>
          Tax Management - Generate Donation Receipts
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Search Member"
              value={memberName}
              onChange={(e) => setMemberName(e.target.value)}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Button variant="contained" color="primary" fullWidth onClick={handleSearchMember}>
              Search
            </Button>
          </Grid>
        </Grid>
      </Paper>
      <Tables />
      <Footer />
    </DashboardLayout>
  );
}
export default TaxManagement;
