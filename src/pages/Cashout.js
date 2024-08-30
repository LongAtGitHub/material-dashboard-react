/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "layoutComponents/Footer";
import MasterCard from "examples/Cards/MasterCard";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Billing page components
import PaymentMethod from "layouts/billing/components/PaymentMethod";
import Invoices from "layouts/billing/components/Invoices";
import BillingInformation from "layouts/billing/components/BillingInformation";
import Transactions from "layouts/billing/components/Transactions";
import Button from "@mui/material/Button";
import { CardActionArea } from "@mui/material";
import Container from "@mui/material";
import GradientLineChart from "examples/Charts/LineCharts/GradientLineChart";

// Data
import DefaultLineChart from "examples/Charts/LineCharts/DefaultLineChart";
import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";
const { sales, tasks } = reportsLineChartData;
function MyLineChart() {
  return (
    <DefaultLineChart
      chart={{
        labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
          {
            label: "Organic Search",
            color: "info",
            data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
          },
          {
            label: "Referral",
            color: "dark",
            data: [30, 90, 40, 140, 290, 290, 340, 230, 400],
          },
          {
            label: "Direct",
            color: "primary",
            data: [40, 80, 70, 90, 30, 90, 140, 130, 200],
          },
        ],
      }}
    />
  );
}
function Billing() {
  return (
    <DashboardLayout>
      <DashboardNavbar absolute isMini />
      <MDBox mt={8}>
        <MDBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={8}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={12} xl={12}>
                  {/* <div style={{ backgroundColor: "white" }}>Hello</div> */}
                  <MDBox bgColor="white" borderRadius="lg">
                    <div style={{ padding: "5%" }}>
                      <h4>Total Balance</h4>
                      <h2>$500,000</h2>
                    </div>
                    <MyLineChart />
                  </MDBox>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} lg={4}>
              <Invoices />
            </Grid>
          </Grid>
        </MDBox>
        <MDBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={7}>
              <BillingInformation />
            </Grid>
            <Grid item xs={12} md={5}>
              <Transactions />
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
      <br />
      <Footer />
    </DashboardLayout>
  );
}

export default Billing;
