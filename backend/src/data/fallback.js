const fallbackActors = [
    {
        id: 1,
        name: "Udyogi",
        count: 8420
    },
    {
        id: 2,
        name: "Udyami",
        count: 2840
    },
    {
        id: 3,
        name: "Mitra",
        count: 1680
    },
    {
        id: 4,
        name: "Vaani",
        count: 1240
    },
    {
        id: 5,
        name: "Dhavak",
        count: 980
    },
    {
        id: 6,
        name: "Vasuki",
        count: 860
    }
];

const fallbackMetrics = [
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
        title: "Villages",
        value: 9842,
        changePercent: 12,
        unit: null
    }
];
const fallbackOperatingUnits = [
    { id: 1, name: "State", count: 28 },
    { id: 2, name: "District", count: 312 },
    { id: 3, name: "Territory", count: 640 },
    { id: 4, name: "Block", count: 4820 },
    { id: 5, name: "Vatika", count: 9842 },
    { id: 6, name: "MIRI Hub", count: 420 },
    { id: 7, name: "MIRI Store", count: 380 },
    { id: 8, name: "CSP", count: 530 },
    { id: 9, name: "Barter Store", count: 52 },
    { id: 10, name: "Aadhaar Centers", count: 410 },
    { id: 11, name: "Route Bank", count: 220 },
    { id: 12, name: "Route SCM", count: 190 },
    { id: 13, name: "RRP", count: 340 },
    { id: 14, name: "SWSM", count: 240 },
    { id: 15, name: "Others", count: 860 }
];
const fallbackVatikaStages = [
    { id: 1, stage: "Initiated", count: 1200 },
    { id: 2, stage: "Active", count: 3400 },
    { id: 3, stage: "Growing", count: 2800 },
    { id: 4, stage: "Mature", count: 1800 },
    { id: 5, stage: "Transition", count: 642 }
];
const fallbackVatikaLifecycle = [
    {
        id: 1,
        stage: "Inquiry",
        vatikas: 1356,
        conversionPercent: 100,
        avgTimeToStage: "0 - 1 Month"
    },
    {
        id: 2,
        stage: "Foundation",
        vatikas: 1080,
        conversionPercent: 80,
        avgTimeToStage: "1 - 3 Months"
    },
    {
        id: 3,
        stage: "Seeding",
        vatikas: 742,
        conversionPercent: 55,
        avgTimeToStage: "3 - 6 Months"
    },
    {
        id: 4,
        stage: "Development",
        vatikas: 420,
        conversionPercent: 31,
        avgTimeToStage: "6 - 12 Months"
    },
    {
        id: 5,
        stage: "Growth",
        vatikas: 252,
        conversionPercent: 19,
        avgTimeToStage: "12 - 24 Months"
    },
    {
        id: 6,
        stage: "Sustainable",
        vatikas: 92,
        conversionPercent: 7,
        avgTimeToStage: "> 24 Months"
    }
];
const fallbackStageMovements = [
    {
        id: 1,
        title: "Promoted to Next Stage",
        value: 152,
        changePercent: 18,
        trend: [80, 95, 90, 110, 125, 140, 152]
    },
    {
        id: 2,
        title: "Regressed",
        value: 37,
        changePercent: 5,
        trend: [15, 18, 16, 22, 25, 30, 37]
    },
    {
        id: 3,
        title: "Newly Added",
        value: 298,
        changePercent: 22,
        trend: [120, 145, 160, 190, 220, 260, 298]
    },
    {
        id: 4,
        title: "Inactive / Dormant",
        value: 64,
        changePercent: 12,
        trend: [20, 25, 22, 35, 42, 55, 64]
    }
];

module.exports = {
    fallbackActors,
    fallbackMetrics,
    fallbackOperatingUnits,
    fallbackVatikaStages,
    fallbackVatikaLifecycle
};