import { useEffect, useState } from "react";
const API_URL =
    import.meta.env.VITE_API_URL || "http://localhost:5000";
import "./App.css";

import {
    MapContainer,
    TileLayer,
    CircleMarker,
    Popup
} from "react-leaflet";

import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
    LineChart,
    Line
} from "recharts";

import {
    MapPin,
    Users,
    BriefcaseBusiness,
    WalletCards,
    Package,
    GraduationCap,
    Network,
    UserRound,
    UsersRound,
    Coins,
    MapPinned
} from "lucide-react";


function getMetricIcon(title) {
    switch (title) {

        case "Total Outreach":
            return <Users size={22} />;

        case "People / Actors":
            return <UserRound size={22} />;

        case "Groups / Institutions":
            return <UsersRound size={22} />;

        case "Operating Units":
            return <MapPin size={22} />;

        case "Total Trainings":
            return <GraduationCap size={22} />;

        case "Livelihood Transactions":
            return <Coins size={22} />;

        case "Villages (Vatikas)":
        case "Villages":
            return <MapPinned size={22} />;

        default:
            return null;
    }
}


function App() {

    // =========================
    // STATES
    // =========================

    const [actors, setActors] = useState([]);
    const [metrics, setMetrics] = useState([]);
    const [operatingUnits, setOperatingUnits] = useState([]);

    const [vatikaStageSummary, setVatikaStageSummary] = useState(null);
    const [gosConnections, setGosConnections] = useState([]);
    const [gosRelationshipSummary, setGosRelationshipSummary] = useState(null);

    const [vatikaStages, setVatikaStages] = useState([]);
    const [vatikaLifecycle, setVatikaLifecycle] = useState([]);
    const [stageMovements, setStageMovements] = useState([]);
    const [geographicImpacts, setGeographicImpacts] = useState([]);
    const [productCategories, setProductCategories] = useState([]);
    const [trainingCategories, setTrainingCategories] = useState([]);
    const [plOverview, setPlOverview] = useState([]);
    

    // =========================
    // CALCULATED TOTALS
    // =========================

    const actorsTotal = actors.reduce(
        (total, actor) => total + Number(actor.count),
        0
    );

    const operatingUnitsTotal = operatingUnits.reduce(
        (total, unit) => total + Number(unit.count),
        0
    );

    const maxActorCount = Math.max(
        ...actors.map((actor) => Number(actor.count)),
        0
    );

    const maxOperatingUnitCount = Math.max(
        ...operatingUnits.map((unit) => Number(unit.count)),
        0
    );

const peopleConnections = gosConnections.filter(
    (item) => item.section === "People / Actors"
);

const organizationConnections = gosConnections.filter(
    (item) => item.section === "Organizations"
);

const objectiveConnections = gosConnections.filter(
    (item) => item.section === "Objectives / Verticals"
);

const operatingConnections = gosConnections.filter(
    (item) => item.section === "Operating Units"
);

    // =========================
    // FETCH ACTORS
    // =========================

    useEffect(() => {

      
            fetch(API_URL + "/api/actors")

            .then((response) => response.json())

            .then((data) => {
                setActors(data);
            })

            .catch((error) => {
                console.error(
                    "Error fetching actors:",
                    error
                );
            });

    }, []);


    // =========================
    // FETCH METRICS
    // =========================

    useEffect(() => {

           fetch(API_URL + "/api/metrics")

            .then((response) => response.json())

            .then((data) => {
                setMetrics(data);
            })

            .catch((error) => {
                console.error(
                    "Error fetching metrics:",
                    error
                );
            });

    }, []);


    // =========================
    // FETCH OPERATING UNITS
    // =========================

    useEffect(() => {

       fetch(API_URL + "/api/operating-units")

            .then((response) => response.json())

            .then((data) => {
                setOperatingUnits(data);
            })

            .catch((error) => {
                console.error(
                    "Error fetching operating units:",
                    error
                );
            });

    }, []);


    // =========================
    // FETCH VATIKA STAGES
    // =========================

    useEffect(() => {

        fetch(API_URL + "/api/vatika-stages")

            .then((response) => response.json())

            .then((data) => {
                setVatikaStages(data);
            })

            .catch((error) => {
                console.error(
                    "Error fetching Vatika stages:",
                    error
                );
            });

    }, []);


    // =========================
    // FETCH VATIKA STAGE SUMMARY
    // =========================

    useEffect(() => {
       
      fetch(API_URL + "/api/vatika-stage-summary")
        

            .then((response) => response.json())

            .then((data) => {
                setVatikaStageSummary(data);
            })

            .catch((error) => {
                console.error(
                    "Error fetching Vatika Stage Summary:",
                    error
                );
            });

    }, []);


    // =========================
    // FETCH GOS CONNECTIONS
    // =========================

    useEffect(() => {

        fetch(API_URL + "/api/gos-connections")
            .then((response) => response.json())

            .then((data) => {
                setGosConnections(data);
            })

            .catch((error) => {
                console.error(
                    "Error fetching GOS connections:",
                    error
                );
            });

    }, []);
    useEffect(() => {
       fetch(API_URL + "/api/gos-relationship-summary")
        .then((response) => response.json())
        .then((data) => {
            setGosRelationshipSummary(data);
        })
        .catch((error) => {
            console.error(
                "Error fetching GOS relationship summary:",
                error
            );
        });
}, []);


    // =========================
    // FETCH VATIKA LIFECYCLE
    // =========================

    useEffect(() => {

       fetch(API_URL + "/api/vatika-lifecycle")

            .then((response) => response.json())

            .then((data) => {
                setVatikaLifecycle(data);
            })

            .catch((error) => {
                console.error(
                    "Error fetching Vatika lifecycle:",
                    error
                );
            });

    }, []);


    // =========================
    // FETCH STAGE MOVEMENTS
    // =========================

    useEffect(() => {

     fetch(API_URL + "/api/stage-movements")

            .then((response) => response.json())

            .then((data) => {
                setStageMovements(data);
            })

            .catch((error) => {
                console.error(
                    "Error fetching stage movements:",
                    error
                );
            });

    }, []);


    // =========================
    // FETCH GEOGRAPHIC IMPACT
    // =========================

    useEffect(() => {

       fetch(API_URL + "/api/geographic-impact")

            .then((response) => response.json())

            .then((data) => {
                setGeographicImpacts(data);
            })

            .catch((error) => {
                console.error(
                    "Error fetching geographic impact:",
                    error
                );
            });

    }, []);


    // =========================
    // FETCH PRODUCT CATEGORIES
    // =========================

    useEffect(() => {

       fetch(API_URL + "/api/product-categories")

            .then((response) => response.json())

            .then((data) => {
                setProductCategories(data);
            })

            .catch((error) => {
                console.error(
                    "Error fetching product categories:",
                    error
                );
            });

    }, []);
    


    // =========================
    // FETCH TRAINING CATEGORIES
    // =========================

    useEffect(() => {

       fetch(API_URL + "/api/training-categories")


            .then((response) => response.json())

            .then((data) => {
                setTrainingCategories(data);
            })

            .catch((error) => {
                console.error(
                    "Error fetching training categories:",
                    error
                );
            });

    }, []);


    // =========================
    // FETCH P&L
    // =========================

    useEffect(() => {

     fetch(API_URL + "/api/pl-overview")

            .then((response) => response.json())

            .then((data) => {
                setPlOverview(data);
            })

            .catch((error) => {
                console.error(
                    "Error fetching P&L overview:",
                    error
                );
            });

    }, []);


    // =========================
    // RETURN
    // =========================

    return (

        <div className="app">


            {/* =========================
                WELCOME BANNER
            ========================= */}

            <div className="welcome-gos-banner">

                <img
                    src="/images/welcome-gos.png"
                    alt="Welcome to GOS"
                />

            </div>


            {/* =========================
                IMPACT AT A GLANCE
            ========================= */}

            <div className="metrics-section">

                <div className="metrics-header">

                    <h2>
                        Impact at a Glance
                    </h2>

                    <span>
                        | Till Date
                    </span>

                </div>


                <div className="metrics-container">

                    {metrics.map((metric) => (

                        <div
                            className="metric-card"
                            key={metric.id}
                        >

                            <div className="metric-icon">

                                {getMetricIcon(
                                    metric.title
                                )}

                            </div>


                            <div className="metric-details">

                                <h3>
                                    {metric.title}
                                </h3>


                                <p>

                                    {metric.unit === "Cr"

                                        ? `${Number(
                                            metric.value
                                        ).toFixed(1)} Cr`

                                        : Number(
                                            metric.value
                                        ).toLocaleString()

                                    }

                                </p>


                                {metric.title
                                    ?.toLowerCase()
                                    .includes("villages")

                                    ? (

                                        <small className="metric-subtext">
                                            Across 12 states
                                        </small>

                                    )

                                    : (

                                        <span>
                                            ↑{" "}
                                            {Number(
                                                metric.changePercent
                                            ).toFixed(0)}
                                            %
                                        </span>

                                    )

                                }

                            </div>

                        </div>

                    ))}

                </div>

            </div>


            {/* =========================
                PEOPLE / ACTORS
            ========================= */}
            <div className="top-dashboard-row">

            <div className="actors-card">

                <div className="actors-header">

                    <h2>
                        People / Actors
                    </h2>

                    <span className="actors-total">
                        {actorsTotal.toLocaleString()}
                    </span>

                    <span className="view-all">
                        View All →
                    </span>

                </div>


                <div className="actors-list">

                    {actors.map((actor, index) => (

                        <div
                            className="actor-row"
                            key={actor.id}
                        >

                            <div className="actor-name">

                                <span className="actor-icon">

                                    {index === 0 && (
                                        <Users size={13} />
                                    )}

                                    {index === 1 && (
                                        <UserRound size={13} />
                                    )}

                                    {index === 2 && (
                                        <UsersRound size={13} />
                                    )}

                                    {index === 3 && (
                                        <UserRound size={13} />
                                    )}

                                    {index === 4 && (
                                        <UserRound size={13} />
                                    )}

                                    {index === 5 && (
                                        <UserRound size={13} />
                                    )}

                                    {index === 6 && (
                                        <Users size={13} />
                                    )}

                                    {index === 7 && (
                                        <Users size={13} />
                                    )}

                                    {index === 8 && (
                                        <GraduationCap size={13} />
                                    )}

                                    {index === 9 && (
                                        <UserRound size={13} />
                                    )}

                                    {index === 10 && (
                                        <UserRound size={13} />
                                    )}

                                    {index === 11 && (
                                        <GraduationCap size={13} />
                                    )}

                                    {index === 12 && (
                                        <GraduationCap size={13} />
                                    )}

                                    {index === 13 && (
                                        <UserRound size={13} />
                                    )}

                                    {index === 14 && (
                                        <Users size={13} />
                                    )}

                                </span>


                                <span>
                                    {actor.name}
                                </span>

                            </div>


                            <div className="actor-progress">

                                <div
                                    className="actor-progress-fill"
                                    style={{
                                        width: `${
                                            maxActorCount
                                                ? (
                                                    Number(
                                                        actor.count
                                                    ) /
                                                    maxActorCount
                                                ) * 100
                                                : 0
                                        }%`
                                    }}
                                ></div>

                            </div>


                            <span className="actor-count">

                                {Number(
                                    actor.count
                                ).toLocaleString()}

                            </span>

                        </div>

                    ))}

                </div>

            </div>
                    {/* =========================
    HOW GOS CONNECTS
========================= */}

<div className="gos-connections-card">

    <div className="gos-connections-header">
        <div>
            <h2>How GOS Connects</h2>
            <p>People to Purpose</p>
        </div>
    </div>
      
      <div className="gos-connection-lines">
    <div className="connection-line line-1"></div>
    <div className="connection-line line-2"></div>
    <div className="connection-line line-3"></div>
</div>

    <div className="gos-connections-columns">

        {/* People / Actors */}
        <div className="gos-connection-column">

            <h3>People / Actors</h3>

            <div className="gos-connection-list">

                {peopleConnections.map((item) => (

                    <div
                        className="gos-connection-item"
                        key={item.id}
                    >

                        <span
                            className="gos-connection-dot"
                            style={{
                                backgroundColor: item.color
                            }}
                        ></span>

                        <span>
                            {item.name}
                        </span>

                    </div>

                ))}

            </div>

        </div>


        {/* Organizations */}
        <div className="gos-connection-column">

            <h3>Organizations</h3>

            <div className="gos-connection-list">

                {organizationConnections.map((item) => (

                    <div
                        className="gos-connection-item"
                        key={item.id}
                    >

                        <span
                            className="gos-connection-dot"
                            style={{
                                backgroundColor: item.color
                            }}
                        ></span>

                        <span>
                            {item.name}
                        </span>

                    </div>

                ))}

            </div>

        </div>


        {/* Objectives / Verticals */}
        <div className="gos-connection-column">

            <h3>Objectives / Verticals</h3>

            <div className="gos-connection-list">

                {objectiveConnections.map((item) => (

                    <div
                        className="gos-connection-item"
                        key={item.id}
                    >

                        <span
                            className="gos-connection-dot"
                            style={{
                                backgroundColor: item.color
                            }}
                        ></span>

                        <span>
                            {item.name}
                        </span>

                    </div>

                ))}

            </div>

        </div>


        {/* Operating Units */}
        <div className="gos-connection-column">

            <h3>Operating Units</h3>

            <div className="gos-connection-list">

                {operatingConnections.map((item) => (

                    <div
                        className="gos-connection-item"
                        key={item.id}
                    >

                        <span
                            className="gos-connection-dot"
                            style={{
                                backgroundColor: item.color
                            }}
                        ></span>

                        <span>
                            {item.name}
                        </span>

                    </div>

                ))}

            </div>

        </div>

    </div>


    <div className="gos-relationships">

        <strong>
    {gosRelationshipSummary
        ? Number(gosRelationshipSummary.activeRelationships).toLocaleString()
        : "0"}
</strong>

        <span>
            Active Relationships
        </span>

    </div>


    <div className="gos-connection-description">

        GOS connects people, organizations, objectives and
        operating units into a unified rural development
        ecosystem.

    </div>

</div>


            {/* =========================
                OPERATING UNITS
            ========================= */}

            <div className="operating-units-card">

                <div className="operating-units-header">

                    <h2>
                        Operating Units
                    </h2>

                    <span className="operating-units-total">

                        {operatingUnitsTotal.toLocaleString()}

                    </span>

                    <span className="view-all">
                        View All →
                    </span>

                </div>


                <div className="operating-units-list">

                    {operatingUnits.map(
                        (unit, index) => (

                            <div
                                className="operating-unit-row"
                                key={unit.id}
                            >

                                <div className="operating-unit-name">

                                    <span className="operating-unit-icon">

                                        {index === 0 && (
                                            <MapPin size={12} />
                                        )}

                                        {index === 1 && (
                                            <MapPin size={12} />
                                        )}

                                        {index === 2 && (
                                            <Network size={12} />
                                        )}

                                        {index === 3 && (
                                            <Network size={12} />
                                        )}

                                        {index === 4 && (
                                            <MapPin size={12} />
                                        )}

                                        {index === 5 && (
                                            <Package size={12} />
                                        )}

                                        {index === 6 && (
                                            <Package size={12} />
                                        )}

                                        {index === 7 && (
                                            <BriefcaseBusiness size={12} />
                                        )}

                                        {index === 8 && (
                                            <Package size={12} />
                                        )}

                                        {index === 9 && (
                                            <MapPin size={12} />
                                        )}

                                        {index === 10 && (
                                            <Network size={12} />
                                        )}

                                        {index === 11 && (
                                            <Network size={12} />
                                        )}

                                        {index === 12 && (
                                            <BriefcaseBusiness size={12} />
                                        )}

                                        {index === 13 && (
                                            <Network size={12} />
                                        )}

                                        {index === 14 && (
                                            <Package size={12} />
                                        )}

                                    </span>


                                    <span>
                                        {unit.name}
                                    </span>

                                </div>


                                <div className="operating-unit-progress">

                                    <div
                                        className="operating-unit-progress-fill"
                                        style={{
                                            width: `${
                                                maxOperatingUnitCount
                                                    ? (
                                                        Number(
                                                            unit.count
                                                        ) /
                                                        maxOperatingUnitCount
                                                    ) * 100
                                                    : 0
                                            }%`
                                        }}
                                    ></div>

                                </div>


                                <span className="operating-unit-count">

                                    {Number(
                                        unit.count
                                    ).toLocaleString()}

                                </span>

                            </div>

                        )
                    )}

                </div>

            </div>
            </div>


            {/* =========================
                VATIKA STAGE DISTRIBUTION
            ========================= */}
            <div className="second-dashboard-row">

            <div className="vatika-stages-card">

                <div className="vatika-stages-header">

                    <h2>
                        Vatika Stage Distribution
                    </h2>

                    <span className="view-all">
                        View Details →
                    </span>

                </div>


                <div className="vatika-stage-content">


                    <div className="vatika-donut-container">

                        <ResponsiveContainer
                            width="100%"
                            height={190}
                        >

                            <PieChart>

                                <Pie
                                    data={vatikaStages}
                                    dataKey="count"
                                    nameKey="stage"
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={58}
                                    outerRadius={82}
                                    paddingAngle={2}
                                    isAnimationActive={false}
                                >

                                    {vatikaStages.map(
                                        (entry, index) => (

                                            <Cell
                                                key={`cell-${index}`}
                                                fill={[
                                                    "#5B9BD5",
                                                    "#70AD47",
                                                    "#FFC000",
                                                    "#ED7D31"
                                                ][
                                                    index % 4
                                                ]}
                                            />

                                        )
                                    )}

                                </Pie>

                            </PieChart>

                        </ResponsiveContainer>


                        <div className="vatika-donut-total">

                            <strong>

                                {vatikaStageSummary

                                    ? Number(
                                        vatikaStageSummary.totalVatikas
                                    ).toLocaleString()

                                    : "-"

                                }

                            </strong>

                            <span>
                                Vatikas
                            </span>

                        </div>

                    </div>


                    <div className="vatika-stage-legend">

                        {vatikaStages.map(
                            (item, index) => (

                                <div
                                    className="vatika-legend-row"
                                    key={item.id}
                                >

                                    <span
                                        className="vatika-legend-dot"
                                        style={{
                                            backgroundColor: [
                                                "#5B9BD5",
                                                "#70AD47",
                                                "#FFC000",
                                                "#ED7D31"
                                            ][
                                                index % 4
                                            ]
                                        }}
                                    ></span>


                                    <span className="vatika-legend-name">

                                        {item.stage}

                                    </span>


                                    <strong>

                                        {Number(
                                            item.count
                                        ).toLocaleString()}

                                    </strong>


                                    <span className="vatika-legend-percentage">

                                        {Number(
                                            item.percentage
                                        ).toFixed(1)}
                                        %

                                    </span>

                                </div>

                            )
                        )}

                    </div>

                </div>


                <div className="vatika-stage-summary">


                    <div className="vatika-summary-box">

                        <span>
                            Avg. Time to Stage
                        </span>

                        <strong>

                            {vatikaStageSummary

                                ? Number(
                                    vatikaStageSummary.avgTimeToStage
                                ).toFixed(1)

                                : "-"

                            }{" "}
                            Months

                        </strong>

                    </div>


                    <div className="vatika-summary-box newly-promoted-box">

                        <span>
                            Newly Promoted
                        </span>

                        <strong>

                            {vatikaStageSummary

                                ? Number(
                                    vatikaStageSummary.newlyPromoted
                                ).toLocaleString()

                                : "-"

                            }

                        </strong>

                        <small>

                            ↑{" "}
                            {vatikaStageSummary

                                ? Number(
                                    vatikaStageSummary
                                        .newlyPromotedChangePercent
                                ).toFixed(0)

                                : "-"

                            }
                            % vs last year

                        </small>

                    </div>


                    <div className="vatika-summary-box at-risk-box">

                        <span>
                            At Risk (Vatikas)
                        </span>

                        <strong>

                            {vatikaStageSummary

                                ? Number(
                                    vatikaStageSummary.atRiskVatikas
                                ).toLocaleString()

                                : "-"

                            }

                        </strong>

                        <small>

                            ↑{" "}
                            {vatikaStageSummary

                                ? Number(
                                    vatikaStageSummary
                                        .atRiskChangePercent
                                ).toFixed(0)

                                : "-"

                            }
                            % vs last year

                        </small>

                    </div>

                </div>

            </div>


            {/* =========================
                VATIKA LIFECYCLE FUNNEL
            ========================= */}

            <div className="vatika-lifecycle-card">

                <h2>
                    Vatika Lifecycle Funnel
                </h2>


                <div className="vatika-lifecycle-content">


                    <div className="lifecycle-funnel">

                        {vatikaLifecycle.map(
                            (item, index) => (

                                <div
                                    key={item.id}
                                    className={`funnel-stage funnel-stage-${index}`}
                                ></div>

                            )
                        )}

                    </div>


                    <div className="lifecycle-table">


                        <div className="lifecycle-table-header">

                            <span>
                                Stage
                            </span>

                            <span>
                                Vatikas
                            </span>

                            <span>
                                Conversion %
                            </span>

                            <span>
                                Avg. Time to Stage
                            </span>

                        </div>


                        {vatikaLifecycle.map(
                            (item) => (

                                <div
                                    className="lifecycle-table-row"
                                    key={item.id}
                                >

                                    <span>
                                        {item.stage}
                                    </span>

                                    <span>

                                        {Number(
                                            item.vatikas
                                        ).toLocaleString()}

                                    </span>

                                    <span>

                                        {Number(
                                            item.conversionPercent
                                        ).toFixed(0)}
                                        %

                                    </span>

                                    <span>
                                        {item.avgTimeToStage}
                                    </span>

                                </div>

                            )
                        )}

                    </div>

                </div>

            </div>


            {/* =========================
                STAGE MOVEMENT
            ========================= */}

            <div className="stage-movement-card">

                <div className="stage-movement-header">

                    <h2>
                        Stage Movement
                    </h2>

                    <span>
                        This Year
                    </span>

                </div>


                <div className="stage-movement-grid">

                    {stageMovements.map(
                        (item, index) => (

                            <div
                                className={`stage-movement-item movement-${index}`}
                                key={item.id}
                            >

                                <h3>
                                    {item.title}
                                </h3>


                                <div className="movement-value">

                                    {Number(
                                        item.value
                                    ).toLocaleString()}

                                </div>


                                <div className="movement-change">

                                    ↑{" "}
                                    {Number(
                                        item.changePercent
                                    ).toFixed(0)}
                                    %

                                    <span>
                                        {" "}
                                        vs last year
                                    </span>

                                </div>


                                <div className="movement-chart">

                                    <ResponsiveContainer
                                        width="100%"
                                        height={45}
                                    >

                                        <LineChart
                                            data={(
                                                item.trend || []
                                            ).map(
                                                (
                                                    value,
                                                    trendIndex
                                                ) => ({
                                                    index:
                                                        trendIndex,
                                                    value:
                                                        Number(
                                                            value
                                                        )
                                                })
                                            )}
                                        >

                                            <Line
                                                type="monotone"
                                                dataKey="value"
                                                stroke={
                                                    index === 0
                                                        ? "#16834b"
                                                        : index === 1
                                                            ? "#e53935"
                                                            : index === 2
                                                                ? "#1976d2"
                                                                : "#f39c12"
                                                }
                                                strokeWidth={2}
                                                dot={false}
                                                isAnimationActive={false}
                                            />

                                        </LineChart>

                                    </ResponsiveContainer>

                                </div>

                            </div>

                        )
                    )}

                </div>

            </div>
            </div>


            {/* =========================
                GEOGRAPHIC IMPACT
            ========================= */}

            <div className="third-dashboard-row">

            <div className="geographic-card">

                <div className="geographic-header">

                    <h2>
                        Geographic Impact Map
                    </h2>

                    <select>

                        <option>
                            Impact Type
                        </option>

                        <option>
                            Total Outreach
                        </option>

                    </select>

                </div>


                <div className="map-container">

                    <MapContainer
                        center={[22.5, 79]}
                        zoom={5}
                        className="india-map"
                    >

                        <TileLayer
                            attribution="&copy; OpenStreetMap contributors"
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />


                        {geographicImpacts.map(
                            (location) => (

                                <CircleMarker
                                    key={location.id}
                                    center={[
                                        Number(
                                            location.latitude
                                        ),
                                        Number(
                                            location.longitude
                                        )
                                    ]}
                                    radius={7}
                                    pathOptions={{
                                        color:
                                            Number(
                                                location.outreach
                                            ) > 250000

                                                ? "green"

                                                : Number(
                                                    location.outreach
                                                ) >= 150000

                                                    ? "#2196f3"

                                                    : Number(
                                                        location.outreach
                                                    ) >= 50000

                                                        ? "gold"

                                                        : "red"
                                    }}
                                >

                                    <Popup>

                                        <strong>
                                            {location.state}
                                        </strong>

                                        <br />

                                        Outreach:{" "}

                                        {Number(
                                            location.outreach
                                        ).toLocaleString()}

                                    </Popup>

                                </CircleMarker>

                            )
                        )}

                    </MapContainer>


                    <div className="impact-legend">

                        <h4>
                            Impact (Outreach)
                        </h4>


                        <div>
                            <span className="legend-dot green"></span>
                            <span>
                                &gt; 250K
                            </span>
                        </div>


                        <div>
                            <span className="legend-dot blue"></span>
                            <span>
                                150K - 250K
                            </span>
                        </div>


                        <div>
                            <span className="legend-dot yellow"></span>
                            <span>
                                50K - 150K
                            </span>
                        </div>


                        <div>
                            <span className="legend-dot red"></span>
                            <span>
                                &lt; 50K
                            </span>
                        </div>

                    </div>

                </div>


                <div className="geographic-stats">

                    <div className="geo-stat">

                        <strong>
                            28
                        </strong>

                        <span>
                            States
                        </span>

                    </div>


                    <div className="geo-stat">

                        <strong>
                            742
                        </strong>

                        <span>
                            Districts
                        </span>

                    </div>


                    <div className="geo-stat">

                        <strong>
                            4,820
                        </strong>

                        <span>
                            Blocks
                        </span>

                    </div>


                    <div className="geo-stat">

                        <strong>
                            9,842
                        </strong>

                        <span>
                            Vatikas
                        </span>

                    </div>


                    <div className="geo-stat">

                        <strong>
                            8,436
                        </strong>

                        <span>
                            Operating Units
                        </span>

                    </div>

                </div>

            </div>


            {/* =========================
                PRODUCTS & VALUE CHAINS
            ========================= */}

            <div className="products-card">

                <div className="products-header">

                    <h2>
                        Products & Value Chains
                    </h2>

                    <span className="view-all">
                        View All →
                    </span>

                </div>


                <div className="product-tabs">

                    <button className="active-tab">
                        Product Categories
                    </button>

                    <button>
                        Value Chains
                    </button>

                </div>


                <div className="product-grid">

                    {productCategories.map(
                        (product) => (

                            <div
                                className="product-item"
                                key={product.id}
                            >

                                <div className="product-icon">
                                    🛒
                                </div>


                                <div className="product-name">

                                    {product.category}

                                </div>


                                <div className="product-count">

                                    {Number(
                                        product.count
                                    ).toLocaleString()}

                                </div>


                                <div className="product-label">
                                    Producers
                                </div>

                            </div>

                        )
                    )}

                </div>
                </div>


                {/* =========================
                    TRAINING
                ========================= */}
                  <div className="third-dashboard-right">


                <div className="training-card">

                    <div className="training-header">

                        <h2>
                            Training & Capacity Building
                        </h2>

                        <span className="view-all">
                            View All →
                        </span>

                    </div>


                    <div className="training-content">


                        <div className="training-chart">

                            <PieChart
                                width={250}
                                height={220}
                            >

                                <Pie
                                    data={trainingCategories.map(
                                        (item) => ({
                                            ...item,
                                            percentage:
                                                Number(
                                                    item.percentage
                                                )
                                        })
                                    )}
                                    dataKey="percentage"
                                    nameKey="category"
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={55}
                                    outerRadius={85}
                                    paddingAngle={1}
                                >

                                    {trainingCategories.map(
                                        (item, index) => (

                                            <Cell
                                                key={`cell-${index}`}
                                                fill={[
                                                    "#4169E1",
                                                    "#FF8C32",
                                                    "#2CB67D",
                                                    "#F2C94C",
                                                    "#9B6DDB",
                                                    "#4AADE8"
                                                ][index]}
                                            />

                                        )
                                    )}

                                </Pie>

                            </PieChart>


                            <div className="training-total">

                                <strong>
                                    112,989
                                </strong>

                                <span>
                                    Trainings
                                </span>

                            </div>

                        </div>


                        <div className="training-legend">

                            {trainingCategories.map(
                                (item) => (

                                    <div
                                        className="training-legend-row"
                                        key={item.id}
                                    >

                                        <span className="training-dot"></span>


                                        <span className="training-category">

                                            {item.category}

                                        </span>


                                        <strong>

                                            {Number(
                                                item.percentage
                                            )}
                                            %

                                        </strong>

                                    </div>

                                )
                            )}

                        </div>

                    </div>

                </div>
                </div>


                {/* =========================
                    P & L OVERVIEW
                ========================= */}

                <div className="pl-card">

                    <div className="pl-header">

                        <h2>
                            P & L Overview
                        </h2>

                        <span className="view-all">
                            View Details →
                        </span>

                    </div>


                    <div className="pl-tabs">

                        <button className="active-pl-tab">
                            By Vertical
                        </button>

                        <button>
                            By Business Unit
                        </button>

                        <button>
                            By Product Category
                        </button>

                    </div>


                    <div className="pl-table">

                        <div className="pl-table-header">

                            <span>
                                Vertical / Business Unit
                            </span>

                            <span>
                                Revenue
                            </span>

                            <span>
                                Cost
                            </span>

                            <span>
                                Surplus / (Deficit)
                            </span>

                        </div>


                        {plOverview.map(
                            (item) => (

                                <div
                                    className="pl-table-row"
                                    key={item.id}
                                >

                                    <span>
                                        {item.vertical}
                                    </span>


                                    <span>
                                        ₹{" "}
                                        {Number(
                                            item.revenue
                                        ).toFixed(1)}{" "}
                                        Cr
                                    </span>


                                    <span>
                                        ₹{" "}
                                        {Number(
                                            item.cost
                                        ).toFixed(1)}{" "}
                                        Cr
                                    </span>


                                    <span
                                        className={
                                            Number(
                                                item.surplusDeficit
                                            ) >= 0

                                                ? "pl-surplus"

                                                : "pl-deficit"
                                        }
                                    >

                                        {Number(
                                            item.surplusDeficit
                                        ) >= 0
                                            ? "₹ "
                                            : "- ₹ "
                                        }

                                        {Math.abs(
                                            Number(
                                                item.surplusDeficit
                                            )
                                        ).toFixed(1)}{" "}
                                        Cr

                                    </span>

                                </div>

                            )
                        )}


                        <div className="pl-total-row">

                            <strong>
                                Total
                            </strong>


                            <strong>

                                ₹{" "}

                                {plOverview
                                    .reduce(
                                        (
                                            total,
                                            item
                                        ) =>
                                            total +
                                            Number(
                                                item.revenue
                                            ),
                                        0
                                    )
                                    .toFixed(1)}

                                {" "}Cr

                            </strong>


                            <strong>

                                ₹{" "}

                                {plOverview
                                    .reduce(
                                        (
                                            total,
                                            item
                                        ) =>
                                            total +
                                            Number(
                                                item.cost
                                            ),
                                        0
                                    )
                                    .toFixed(1)}

                                {" "}Cr

                            </strong>


                            <strong className="pl-surplus">

                                ₹{" "}

                                {plOverview
                                    .reduce(
                                        (
                                            total,
                                            item
                                        ) =>
                                            total +
                                            Number(
                                                item.surplusDeficit
                                            ),
                                        0
                                    )
                                    .toFixed(1)}

                                {" "}Cr

                            </strong>

                        </div>

                    </div>

                </div>


                {/* =========================
                    EXPLORE GOS
                ========================= */}

                <div className="explore-gos-card">

                    <div className="explore-gos-header">

                        <div>

                            <h2>
                                Explore GOS
                            </h2>

                            <p>
                                Access key areas of the ecosystem
                            </p>

                        </div>

                    </div>


                    <div className="explore-gos-grid">


                        <div
                            className="explore-item"
                            onClick={() =>
                                alert(
                                    "My Village selected"
                                )
                            }
                        >

                            <div className="explore-icon">
                                <MapPin size={18} />
                            </div>

                            <div className="explore-content">

                                <h3>
                                    1. My Village
                                </h3>

                                <p>
                                    Village profile, coverage,
                                    assets and development status
                                </p>

                            </div>

                            <div className="explore-arrow">
                                →
                            </div>

                        </div>


                        <div
                            className="explore-item"
                            onClick={() =>
                                alert(
                                    "People selected"
                                )
                            }
                        >

                            <div className="explore-icon">
                                <Users size={18} />
                            </div>

                            <div className="explore-content">

                                <h3>
                                    2. People
                                </h3>

                                <p>
                                    Udyogi, Mitras, Vaanis,
                                    Trainers, CSPs, Employees
                                    and more
                                </p>

                            </div>

                            <div className="explore-arrow">
                                →
                            </div>

                        </div>


                        <div
                            className="explore-item"
                            onClick={() =>
                                alert(
                                    "Livelihood selected"
                                )
                            }
                        >

                            <div className="explore-icon">
                                <BriefcaseBusiness size={18} />
                            </div>

                            <div className="explore-content">

                                <h3>
                                    3. Livelihood
                                </h3>

                                <p>
                                    Opportunities, training,
                                    entrepreneurship and
                                    income tracking
                                </p>

                            </div>

                            <div className="explore-arrow">
                                →
                            </div>

                        </div>


                        <div
                            className="explore-item"
                            onClick={() =>
                                alert(
                                    "Financial Inclusion selected"
                                )
                            }
                        >

                            <div className="explore-icon">
                                <WalletCards size={18} />
                            </div>

                            <div className="explore-content">

                                <h3>
                                    4. Financial Inclusion
                                </h3>

                                <p>
                                    CSP, BC, transactions,
                                    wallets and financial
                                    services
                                </p>

                            </div>

                            <div className="explore-arrow">
                                →
                            </div>

                        </div>


                        <div
                            className="explore-item"
                            onClick={() =>
                                alert(
                                    "Supply Chain & Markets selected"
                                )
                            }
                        >

                            <div className="explore-icon">
                                <Package size={18} />
                            </div>

                            <div className="explore-content">

                                <h3>
                                    5. Supply Chain & Markets
                                </h3>

                                <p>
                                    Products, inventory,
                                    distributors, logistics
                                    and barter
                                </p>

                            </div>

                            <div className="explore-arrow">
                                →
                            </div>

                        </div>


                        <div
                            className="explore-item"
                            onClick={() =>
                                alert(
                                    "Learning & Training selected"
                                )
                            }
                        >

                            <div className="explore-icon">

                                <GraduationCap
                                    size={18}
                                />

                            </div>

                            <div className="explore-content">

                                <h3>
                                    6. Learning & Training
                                </h3>

                                <p>
                                    Training programs,
                                    progress and
                                    certification
                                </p>

                            </div>

                            <div className="explore-arrow">
                                →
                            </div>

                        </div>


                        <div
                            className="explore-item"
                            onClick={() =>
                                alert(
                                    "Partner Network selected"
                                )
                            }
                        >

                            <div className="explore-icon">

                                <Network
                                    size={18}
                                />

                            </div>

                            <div className="explore-content">

                                <h3>
                                    7. Partner Network
                                </h3>

                                <p>
                                    ODCL, VFS, GVS,
                                    Gyandots and other
                                    partners
                                </p>

                            </div>

                            <div className="explore-arrow">
                                →
                            </div>

                        </div>


                        <div
                            className="explore-item"
                            onClick={() =>
                                alert(
                                    "Rural Intelligence selected"
                                )
                            }
                        >

                            <div className="explore-icon">

                                <Network
                                    size={18}
                                />

                            </div>

                            <div className="explore-content">

                                <h3>
                                    8. Rural Intelligence
                                </h3>

                                <p>
                                    Insights, village
                                    potential, risks
                                    and opportunities
                                </p>

                            </div>

                            <div className="explore-arrow">
                                →
                            </div>

                        </div>


                    </div>

                </div>


            </div>
    

        </div>
    );
    
}


export default App;