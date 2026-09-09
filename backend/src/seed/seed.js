require("dotenv").config();

const sequelize = require("../config/database");

const Actor = require("../models/Actor");
const DashboardMetric = require("../models/DashboardMetric");
const OperatingUnit = require("../models/OperatingUnit");
const VatikaStage = require("../models/VatikaStage");
const VatikaLifecycle = require("../models/VatikaLifecycle");
const StageMovement = require("../models/StageMovement");
const GeographicImpact = require("../models/GeographicImpact");
const ProductCategory = require("../models/ProductCategory");
const TrainingCategory = require("../models/TrainingCategory");
const PLOverview = require("../models/PLOverview");
const VatikaStageSummary = require("../models/VatikaStageSummary");
const GOSConnection = require("../models/GOSConnection");
const GOSRelationshipSummary = require("../models/GOSRelationshipSummary");
const actors = [
   
    { name: "Udyogi", count: 8420 },
    { name: "Udyami", count: 2840 },
    { name: "Mitra", count: 1680 },
    { name: "Vaani", count: 1240 },
    { name: "Dhavak", count: 980 },
    { name: "Vasuki", count: 860 },
    { name: "GV", count: 1240 },
    { name: "VF", count: 980 },
    { name: "Gyandoot", count: 720 },
    { name: "Sakhya", count: 640 },
    { name: "BC", count: 580 },
    { name: "Trainee", count: 520 },
    { name: "Trainer", count: 410 },
    { name: "Employee", count: 3600 },
    { name: "Others", count: 2000 }

];


const metrics = [
    {
        title: "Total Outreach",
        value: 5698672,
        changePercent: 12,
        unit: null
    },
    {
        title: "People / Actors",
        value: 4787085,
        changePercent: 18,
        unit: null
    },
    {
        title: "Groups / Institutions",
        value: 252340,
        changePercent: 14,
        unit: null
    },
    {
        title: "Operating Units",
        value: 8436,
        changePercent: 11,
        unit: null
    },
    {
        title: "Total Trainings",
        value: 112989,
        changePercent: 22,
        unit: null
    },
    {
        title: "Livelihood Transactions",
        value: 18.4,
        changePercent: 27,
        unit: "Cr"
    },
    {
        title: "Villages  (Vatikas)",
        value: 9842,
        changePercent: 12,
        unit: null
    }
];


const operatingUnits = [
    { name: "State", count: 28 },
    { name: "District", count: 312 },
    { name: "Territory", count: 640 },
    { name: "Block", count: 4820 },
    { name: "Vatika", count: 9842 },
    { name: "MIRI Hub", count: 420 },
    { name: "MIRI Store", count: 380 },
    { name: "CSP", count: 530 },
    { name: "Barter Store", count: 52 },
    { name: "Aadhaar Centers", count: 410 },
    { name: "Route Bank", count: 220 },
    { name: "Route SCM", count: 190 },
    { name: "RRP", count: 340 },
    { name: "SWSM", count: 240 },
    { name: "Others", count: 860 }
];
const vatikaStages = [
    {
        stage: "Seeding Stage",
        count: 890,
        percentage: 33.0
    },
    {
        stage: "Development Stage",
        count: 420,
        percentage: 31.0
    },
    {
        stage: "Growth Stage",
        count: 412,
        percentage: 30.7
    },
    {
        stage: "Sustainable Stage",
        count: 92,
        percentage: 6.7
    }
];
const vatikaStageSummary = [
    {
        totalVatikas: 1356,
        avgTimeToStage: 8.7,
        newlyPromoted: 152,
        newlyPromotedChangePercent: 19,
        atRiskVatikas: 64,
        atRiskChangePercent: 12
    }
];
const vatikaLifecycle = [
    {
        stage: "Inquiry",
        vatikas: 1356,
        conversionPercent: 100,
        avgTimeToStage: "0 - 1 Month"
    },
    {
        stage: "Foundation",
        vatikas: 1080,
        conversionPercent: 80,
        avgTimeToStage: "1 - 3 Months"
    },
    {
        stage: "Seeding",
        vatikas: 742,
        conversionPercent: 55,
        avgTimeToStage: "3 - 6 Months"
    },
    {
        stage: "Development",
        vatikas: 420,
        conversionPercent: 31,
        avgTimeToStage: "6 - 12 Months"
    },
    {
        stage: "Growth",
        vatikas: 252,
        conversionPercent: 19,
        avgTimeToStage: "12 - 24 Months"
    },
    {
        stage: "Sustainable",
        vatikas: 92,
        conversionPercent: 7,
        avgTimeToStage: "> 24 Months"
    }
];
const stageMovements = [
    {
        title: "Promoted to Next Stage",
        value: 152,
        changePercent: 18,
        trend: [80, 95, 90, 110, 125, 140, 152]
    },
    {
        title: "Regressed",
        value: 37,
        changePercent: 5,
        trend: [15, 18, 16, 22, 25, 30, 37]
    },
    {
        title: "Newly Added",
        value: 298,
        changePercent: 22,
        trend: [120, 145, 160, 190, 220, 260, 298]
    },
    {
        title: "Inactive / Dormant",
        value: 64,
        changePercent: 12,
        trend: [20, 25, 22, 35, 42, 55, 64]
    }
];

const geographicImpacts = [
    {
        state: "Jammu & Kashmir",
        latitude: 33.7782,
        longitude: 76.5762,
        outreach: 85000
    },
    {
        state: "Punjab",
        latitude: 31.1471,
        longitude: 75.3412,
        outreach: 175000
    },
    {
        state: "Himachal Pradesh",
        latitude: 31.1048,
        longitude: 77.1734,
        outreach: 120000
    },
    {
        state: "Rajasthan",
        latitude: 27.0238,
        longitude: 74.2179,
        outreach: 310000
    },
    {
        state: "Gujarat",
        latitude: 22.2587,
        longitude: 71.1924,
        outreach: 280000
    },
    {
        state: "Madhya Pradesh",
        latitude: 22.9734,
        longitude: 78.6569,
        outreach: 220000
    },
    {
        state: "Uttar Pradesh",
        latitude: 26.8467,
        longitude: 80.9462,
        outreach: 190000
    },
    {
        state: "Bihar",
        latitude: 25.0961,
        longitude: 85.3131,
        outreach: 145000
    },
    {
        state: "West Bengal",
        latitude: 22.9868,
        longitude: 87.855,
        outreach: 165000
    },
    {
        state: "Maharashtra",
        latitude: 19.7515,
        longitude: 75.7139,
        outreach: 270000
    },
    {
        state: "Chhattisgarh",
        latitude: 21.2787,
        longitude: 81.8661,
        outreach: 135000
    },
    {
        state: "Odisha",
        latitude: 20.9517,
        longitude: 85.0985,
        outreach: 155000
    },
    {
        state: "Karnataka",
        latitude: 15.3173,
        longitude: 75.7139,
        outreach: 210000
    },
    {
        state: "Telangana",
        latitude: 18.1124,
        longitude: 79.0193,
        outreach: 125000
    },
    {
        state: "Andhra Pradesh",
        latitude: 15.9129,
        longitude: 79.74,
        outreach: 115000
    },
    {
        state: "Tamil Nadu",
        latitude: 11.1271,
        longitude: 78.6569,
        outreach: 95000
    },
    {
        state: "Kerala",
        latitude: 10.8505,
        longitude: 76.2711,
        outreach: 75000
    }
];

const productCategories = [
    {
        category: "Cow & Cow Milk (C&CM)",
        count: 1839,
        producers: 1839
    },
    {
        category: "Vegetables & Fruits (V&F)",
        count: 1420,
        producers: 1420
    },
    {
        category: "Mushroom Processed...",
        count: 1260,
        producers: 1260
    },
    {
        category: "Textile & Textile based...",
        count: 980,
        producers: 980
    },
    {
        category: "Grain, Pulses & Spices (GPS)",
        count: 860,
        producers: 860
    },
    {
        category: "Animal Husbandry (AH)",
        count: 720,
        producers: 720
    },
    {
        category: "Tea & Beverages (T&B)",
        count: 640,
        producers: 640
    },
    {
        category: "Ayurvedic & Herbal (A&H)",
        count: 580,
        producers: 580
    },
    {
        category: "Others",
        count: 420,
        producers: 420
    }
];

const trainingCategories = [
    {
        category: "Livelihood Skills",
        percentage: 32,
        trainings: 36156
    },
    {
        category: "Digital Literacy",
        percentage: 18,
        trainings: 20338
    },
    {
        category: "Financial Literacy",
        percentage: 16,
        trainings: 18078
    },
    {
        category: "Health & Nutrition",
        percentage: 14,
        trainings: 15818
    },
    {
        category: "Leadership",
        percentage: 10,
        trainings: 11299
    },
    {
        category: "Others",
        percentage: 10,
        trainings: 11300
    }
];
const plOverview = [
    {
        vertical: "Abhiyan",
        revenue: 6.2,
        cost: 4.1,
        surplusDeficit: 2.1
    },
    {
        vertical: "RFS",
        revenue: 4.8,
        cost: 3.6,
        surplusDeficit: 1.2
    },
    {
        vertical: "AJA / Artha",
        revenue: 3.9,
        cost: 3.1,
        surplusDeficit: 0.8
    },
    {
        vertical: "Ekyam",
        revenue: 2.4,
        cost: 2.7,
        surplusDeficit: -0.3
    },
    {
        vertical: "Vidhi",
        revenue: 1.8,
        cost: 1.6,
        surplusDeficit: 0.2
    },
    {
        vertical: "Others",
        revenue: 4.5,
        cost: 3.9,
        surplusDeficit: 0.6
    }
];
const gosConnections = [
    // People / Actors
    { section: "People / Actors", name: "Udyogi", count: 8420, color: "#e53935" },
    { section: "People / Actors", name: "Udyami", count: 2840, color: "#f39c12" },
    { section: "People / Actors", name: "Mitra", count: 1680, color: "#70ad47" },
    { section: "People / Actors", name: "Vaani", count: 1240, color: "#5b9bd5" },
    { section: "People / Actors", name: "Dhavak", count: 980, color: "#70ad47" },
    { section: "People / Actors", name: "Vasuki", count: 860, color: "#e53935" },
    { section: "People / Actors", name: "GV", count: 1240, color: "#1976d2" },
    { section: "People / Actors", name: "VF", count: 980, color: "#1976d2" },
    { section: "People / Actors", name: "Gyandoot", count: 720, color: "#5b9bd5" },
    { section: "People / Actors", name: "Sakhya", count: 640, color: "#5b5bd6" },
    { section: "People / Actors", name: "Others", count: 2000, color: "#6b7280" },

    // Organizations
    { section: "Organizations", name: "DSDC", count: 1, color: "#1976d2" },
    { section: "Organizations", name: "DROP", count: 1, color: "#e53935" },
    { section: "Organizations", name: "DRAP", count: 1, color: "#16834b" },
    { section: "Organizations", name: "Quiver", count: 1, color: "#70ad47" },
    { section: "Organizations", name: "DBCPL", count: 1, color: "#1976d2" },
    { section: "Organizations", name: "Deuka", count: 1, color: "#f39c12" },
    { section: "Organizations", name: "DOCL", count: 1, color: "#5b2ca0" },

    // Objectives / Verticals
    { section: "Objectives / Verticals", name: "Abhigyan", count: 1, color: "#e53935" },
    { section: "Objectives / Verticals", name: "HR", count: 1, color: "#5b2ca0" },
    { section: "Objectives / Verticals", name: "RES", count: 1, color: "#1976d2" },
    { section: "Objectives / Verticals", name: "AJA / Artha", count: 1, color: "#1976d2" },
    { section: "Objectives / Verticals", name: "Dynam", count: 1, color: "#1976d2" },
    { section: "Objectives / Verticals", name: "Ayogarth", count: 1, color: "#e53935" },
    { section: "Objectives / Verticals", name: "Vidh", count: 1, color: "#e53935" },
    { section: "Objectives / Verticals", name: "Legal", count: 1, color: "#e53935" },
    { section: "Objectives / Verticals", name: "Auditi", count: 1, color: "#16834b" },
    { section: "Objectives / Verticals", name: "Governance", count: 1, color: "#f39c12" },
    { section: "Objectives / Verticals", name: "Others", count: 1, color: "#6b7280" },

    // Operating Units
    { section: "Operating Units", name: "State", count: 28, color: "#1976d2" },
    { section: "Operating Units", name: "District", count: 312, color: "#1976d2" },
    { section: "Operating Units", name: "Territory", count: 640, color: "#1976d2" },
    { section: "Operating Units", name: "Block", count: 4820, color: "#16834b" },
    { section: "Operating Units", name: "Vatika", count: 9842, color: "#16834b" },
    { section: "Operating Units", name: "MIRI Hub", count: 420, color: "#5b2ca0" },
    { section: "Operating Units", name: "MIRI Store", count: 380, color: "#5b2ca0" },
    { section: "Operating Units", name: "CSP", count: 530, color: "#e53935" },
    { section: "Operating Units", name: "Barter Store", count: 52, color: "#f39c12" },
    { section: "Operating Units", name: "Aadhaar Centers", count: 410, color: "#1976d2" },
    { section: "Operating Units", name: "Route Bank", count: 220, color: "#1976d2" },
    { section: "Operating Units", name: "Route SCM", count: 190, color: "#1976d2" },
    { section: "Operating Units", name: "RRP", count: 340, color: "#5b2ca0" },
    { section: "Operating Units", name: "SWSM", count: 240, color: "#16834b" },
    { section: "Operating Units", name: "Others", count: 860, color: "#6b7280" }
];
const gosRelationshipSummary = [
    {
        activeRelationships: 58920
    }
];


async function seedDatabase() {
    try {

        await sequelize.authenticate();

        console.log("MySQL connected successfully!");


        // Clear old prototype data
        await Actor.destroy({ where: {} });
        await DashboardMetric.destroy({ where: {} });
        await OperatingUnit.destroy({ where: {} });
        await VatikaStage.destroy({ where: {} });
        await VatikaLifecycle.destroy({ where: {} });
        await StageMovement.destroy({ where: {} });
        await GeographicImpact.destroy({ where: {} });
        await ProductCategory.destroy({ where: {} });
        await TrainingCategory.destroy({ where: {} });
        await PLOverview.destroy({ where: {} });
        await VatikaStageSummary.destroy({ where: {} });
        await GOSConnection.destroy({ where: {} });
        await GOSRelationshipSummary.destroy({ where: {} });

        console.log("Old data cleared.");


        // Insert fresh dummy data
        await Actor.bulkCreate(actors);
        await DashboardMetric.bulkCreate(metrics);
        await OperatingUnit.bulkCreate(operatingUnits);
        await VatikaStage.bulkCreate(vatikaStages);
        await VatikaLifecycle.bulkCreate(vatikaLifecycle);
        await StageMovement.bulkCreate(stageMovements);
        await GeographicImpact.bulkCreate(geographicImpacts);
        await ProductCategory.bulkCreate(productCategories);
        await TrainingCategory.bulkCreate(trainingCategories);
        await PLOverview.bulkCreate(plOverview);
        await VatikaStageSummary.bulkCreate(vatikaStageSummary);
        await GOSConnection.bulkCreate(gosConnections);
        await GOSRelationshipSummary.bulkCreate(gosRelationshipSummary);

        console.log("Dummy data inserted successfully.");

    } catch (error) {

        console.error("Error while seeding database:");
        console.error(error);

    } finally {

        await sequelize.close();

    }
}


seedDatabase();
