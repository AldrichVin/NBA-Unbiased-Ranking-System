import React from "react";
import KrispinImg from "../assets/images/Krispin.jpg";
import AldrichImg from "../assets/images/Aldrich.jpeg";
import SamiulImg from "../assets/images/samiul.jpg";
import ShlokImg from "../assets/images/Shlok1.jpg";

export default function About() {
  return (
    <div className="page container">
      <h1>About Our NBA Ranking Project</h1>

      <div className="panel" style={{ marginBottom: "30px" }}>
        <h3>Project Overview</h3>
        <p className="muted">
          <p>
            This ranking system was developed to give basketball fans, analysts, and decision-makers a clear, data-driven way 
            to track player performance throughout the NBA season. In today’s basketball landscape, most rankings are heavily 
            influenced by subjective opinions, often shaped by media narratives, fan bias, or popularity rather than grounded in 
            objective analysis. We set out to change that by creating a model that evaluates players solely based on real-time 
            performance metrics.
          </p>
          <p>
            Our approach goes beyond traditional box-score statistics. It highlights form trends, hot and cold streaks, 
            and player comparisons, helping users see not just who’s performing well, but why and how 
            they’re impacting their teams. The goal is to bridge the gap between advanced analytics and accessible insights, 
            empowering both casual fans and dedicated analysts to understand the game at a deeper level.
          </p>
          <p>
            Ultimately, we envision this ranking model as a tool that can complement and inform major basketball awards, such 
            as MVP voting, All-NBA team selections, and other player accolades. By emphasizing transparency, fairness, and 
            measurable performance, our system aims to make player evaluation more accurate, unbiased, and reflective of what 
            truly happens on the court.
          </p>
        </p>
      </div>

      <div className="panel">
        <h3 style={{ marginBottom: "24px" }}>Our Team</h3>
        <p className="muted" style={{ marginBottom: "32px" }}>
          We are four students passionate about data, sports, and technology:
        </p>

        <div 
          style={{ 
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "24px",
            marginTop: "24px"
          }}
        >
          {/* Project Manager */}
          <div 
            className="panel" 
            style={{ 
              textAlign: "center",
              padding: "24px",
              transition: "transform 0.2s ease",
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-5px)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
          >
            <div 
              style={{ 
                width: "120px",
                height: "120px",
                margin: "0 auto 16px",
                borderRadius: "50%",
                background: "#1e293b",
                border: "3px solid #10b981",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <img 
                src={KrispinImg} 
                alt="Krispin Martin" 
                style={{ width: "100%", height: "100%", objectFit: "cover" }} 
              />
            </div>
            <h4 style={{ marginBottom: "8px", fontSize: "18px" }}>Krispin Martin</h4>
            <p 
              className="muted" 
              style={{ 
                fontSize: "14px",
                color: "#10b981",
                fontWeight: "600"
              }}
            >
              Project Manager
            </p>
          </div>

          {/* Data Engineer */}
          <div 
            className="panel" 
            style={{ 
              textAlign: "center",
              padding: "24px",
              transition: "transform 0.2s ease",
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-5px)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
          >
            <div 
              style={{ 
                width: "120px",
                height: "120px",
                margin: "0 auto 16px",
                borderRadius: "50%",
                background: "#1e293b",
                border: "3px solid #3b82f6",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <img 
                src={AldrichImg} 
                alt="Aldrich Liem" 
                style={{ width: "100%", height: "100%", objectFit: "cover" }} 
              />
            </div>
            <h4 style={{ marginBottom: "8px", fontSize: "18px" }}>Aldrich Liem</h4>
            <p 
              className="muted" 
              style={{ 
                fontSize: "14px",
                color: "#3b82f6",
                fontWeight: "600"
              }}
            >
              Data Engineer
            </p>
          </div>

          {/* QA Lead */}
          <div 
            className="panel" 
            style={{ 
              textAlign: "center",
              padding: "24px",
              transition: "transform 0.2s ease",
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-5px)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
          >
            <div 
              style={{ 
                width: "120px",
                height: "120px",
                margin: "0 auto 16px",
                borderRadius: "50%",
                background: "#1e293b",
                border: "3px solid #f59e0b",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <img 
                src={SamiulImg} 
                alt="Samiul Hoque" 
                style={{ width: "100%", height: "100%", objectFit: "cover" }} 
              />
            </div>
            <h4 style={{ marginBottom: "8px", fontSize: "18px" }}>Samiul Hoque</h4>
            <p 
              className="muted" 
              style={{ 
                fontSize: "14px",
                color: "#f59e0b",
                fontWeight: "600"
              }}
            >
              QA Lead
            </p>
          </div>

          {/* Software Developer */}
          <div 
            className="panel" 
            style={{ 
              textAlign: "center",
              padding: "24px",
              transition: "transform 0.2s ease",
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-5px)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
          >
            <div 
              style={{ 
                width: "120px",
                height: "120px",
                margin: "0 auto 16px",
                borderRadius: "50%",
                background: "#1e293b",
                border: "3px solid #ec4899",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <img 
                src={ShlokImg} 
                alt="Shlok Trivedi" 
                style={{ width: "100%", height: "100%", objectFit: "cover" }} 
              />
            </div>
            <h4 style={{ marginBottom: "8px", fontSize: "18px" }}>Shlok Trivedi</h4>
            <p 
              className="muted" 
              style={{ 
                fontSize: "14px",
                color: "#ec4899",
                fontWeight: "600"
              }}
            >
              Software Developer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}