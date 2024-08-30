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

function Billing() {
  return (
    <DashboardLayout>
      <DashboardNavbar absolute isMini />
      <MDBox mt={8}>
        <MDBox mb={3}>
          <h3>Balance: $500,000</h3>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={8}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6} xl={6}>
                  <CardActionArea
                    onClick={() => alert("Transaction will happen in 3-5 businessd days")}
                  >
                    <DefaultInfoCard
                      icon="account_balance"
                      title="Cash Out"
                      description={"3-5 businessd days \n \n \n"}
                      // value="+$2000"
                      style={{ height: "200%" }}
                    />
                  </CardActionArea>
                </Grid>
                <Grid item xs={12} md={6} xl={6}>
                  <CardActionArea
                    onClick={() => alert("Transaction will happen in 1 businessd day")}
                  >
                    <DefaultInfoCard
                      icon="paypal"
                      title="Instant cash out"
                      description="1 business day + 10% fee"
                      // value="$455.00"
                    />
                  </CardActionArea>
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
