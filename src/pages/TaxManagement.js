import React, { useState, useEffect } from "react";
import {
  Container,
  Paper,
  Typography,
  TextField,
  Select,
  MenuItem,
  Button,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Grid,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { DatePicker } from "@mui/lab"; // or DateRangePicker

function TaxManagement() {
  const [donorName, setDonorName] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState(null);
  const [donationCategory, setDonationCategory] = useState("");
  const [receipts, setReceipts] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedReceipt, setSelectedReceipt] = useState(null);

  // Search and Filter States
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredReceipts, setFilteredReceipts] = useState([]);

  useEffect(() => {
    let filtered = receipts;

    if (searchQuery) {
      filtered = filtered.filter((receipt) =>
        receipt.donorName.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (date) {
      filtered = filtered.filter(
        (receipt) => receipt.date?.toLocaleDateString() === date?.toLocaleDateString()
      );
    }

    if (donationCategory) {
      filtered = filtered.filter((receipt) => receipt.donationCategory === donationCategory);
    }

    setFilteredReceipts(filtered);
  }, [searchQuery, date, donationCategory, receipts]);

  const handleGenerateReceipt = () => {
    const newReceipt = { donorName, amount, date, donationCategory };
    setReceipts([...receipts, newReceipt]);
    setSelectedReceipt(newReceipt);
    setOpenDialog(true);
  };

  return (
    <Container>
      <Paper elevation={3} sx={{ padding: 3 }}>
        <Typography variant="h4" gutterBottom>
          Tax Management - Generate Donation Receipts
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Donor Name"
              value={donorName}
              onChange={(e) => setDonorName(e.target.value)}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              type="number"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <DatePicker
              label="Date of Donation"
              value={date}
              onChange={(newDate) => setDate(newDate)}
              renderInput={(params) => <TextField fullWidth {...params} />}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Select
              fullWidth
              label="Donation Category"
              value={donationCategory}
              onChange={(e) => setDonationCategory(e.target.value)}
            >
              <MenuItem value="General">General</MenuItem>
              <MenuItem value="Building Fund">Building Fund</MenuItem>
              <MenuItem value="Missionary Support">Missionary Support</MenuItem>
            </Select>
          </Grid>

          <Grid item xs={12}>
            <Button variant="contained" color="primary" fullWidth onClick={handleGenerateReceipt}>
              Generate Receipt
            </Button>
          </Grid>
        </Grid>
      </Paper>

      <Typography variant="h6" gutterBottom sx={{ marginTop: 3 }}>
        Search and Filter Donations
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Search by Donor Name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <DatePicker
            label="Filter by Date"
            value={date}
            onChange={(newDate) => setDate(newDate)}
            renderInput={(params) => <TextField fullWidth {...params} />}
          />
        </Grid>

        <Grid item xs={12}>
          <Select
            fullWidth
            label="Filter by Category"
            value={donationCategory}
            onChange={(e) => setDonationCategory(e.target.value)}
          >
            <MenuItem value="">All Categories</MenuItem>
            <MenuItem value="General">General</MenuItem>
            <MenuItem value="Building Fund">Building Fund</MenuItem>
            <MenuItem value="Missionary Support">Missionary Support</MenuItem>
          </Select>
        </Grid>
      </Grid>

      <Typography variant="h6" gutterBottom sx={{ marginTop: 3 }}>
        Donation History
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Donor Name</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Category</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredReceipts.map((receipt, index) => (
            <TableRow key={index}>
              <TableCell>{receipt.donorName}</TableCell>
              <TableCell>{receipt.amount}</TableCell>
              <TableCell>{receipt.date?.toLocaleDateString()}</TableCell>
              <TableCell>{receipt.donationCategory}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Donation Receipt</DialogTitle>
        <DialogContent>
          <Typography variant="body1">Donor: {selectedReceipt?.donorName}</Typography>
          <Typography variant="body1">Amount: ${selectedReceipt?.amount}</Typography>
          <Typography variant="body1">
            Date: {selectedReceipt?.date?.toLocaleDateString()}
          </Typography>
          <Typography variant="body1">Category: {selectedReceipt?.donationCategory}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Close</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}
export default TaxManagement;
