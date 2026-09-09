require("dotenv").config();

const express = require("express");
const cors = require("cors");

require("./models/Actor");
require("./models/DashboardMetric");
require("./models/OperatingUnit");
require("./models/VatikaStage");
require("./models/StageMovement");
require("./models/GeographicImpact");
require("./models/ProductCategory");
require("./models/TrainingCategory");
require("./models/PLOverview");
require("./models/VatikaStageSummary");
require("./models/GOSConnection");
require("./models/GOSRelationshipSummary");

const sequelize = require("./config/database");
const actorRoutes = require("./routes/actorRoutes");
const metricRoutes = require("./routes/metricRoutes");
const operatingUnitRoutes = require("./routes/operatingUnitRoutes");
const vatikaStageRoutes = require("./routes/vatikaStageRoutes");
const vatikaLifecycleRoutes = require("./routes/vatikaLifecycleRoutes");
const stageMovementRoutes = require("./routes/stageMovementRoutes");
const geographicImpactRoutes = require("./routes/geographicImpactRoutes");
const productCategoryRoutes = require("./routes/productCategoryRoutes");
const trainingCategoryRoutes = require("./routes/trainingCategoryRoutes");
const plOverviewRoutes = require("./routes/plOverviewRoutes");
const vatikaStageSummaryRoutes = require("./routes/vatikaStageSummaryRoutes");
const gosConnectionRoutes = require("./routes/gosConnectionRoutes");
const gosRelationshipSummaryRoutes = require("./routes/gosRelationshipSummaryRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/actors", actorRoutes);
app.use("/api/metrics", metricRoutes);
app.use("/api/operating-units", operatingUnitRoutes);
app.use("/api/vatika-stages", vatikaStageRoutes);
app.use("/api/vatika-lifecycle", vatikaLifecycleRoutes);
app.use("/api/stage-movements", stageMovementRoutes);
app.use("/api/geographic-impact", geographicImpactRoutes);
app.use("/api/product-categories", productCategoryRoutes);
app.use("/api/training-categories", trainingCategoryRoutes);
app.use("/api/pl-overview", plOverviewRoutes);
app.use("/api/vatika-stage-summary", vatikaStageSummaryRoutes);
app.use("/api/gos-connections", gosConnectionRoutes);
app.use(
    "/api/gos-relationship-summary",
    gosRelationshipSummaryRoutes
);
const PORT = process.env.PORT || 5000;

async function startServer() {
    try {
        await sequelize.authenticate();

        console.log("MySQL connected successfully!");

      await sequelize.sync({ alter: true });

        console.log("Database synchronized.");

    } catch (error) {
        console.error("Database connection failed:");
        console.error(error.message);
    }

    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
}

startServer();