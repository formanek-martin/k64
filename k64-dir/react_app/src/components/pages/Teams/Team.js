import { useLocation } from "react-router-dom";

export default function Team() {
    const location = useLocation();
    return (
        <div className="team_page k-grid">
            <div className="k-grid--center">  
                zatim něco dočasného o konkrétním týmu: {location.pathname}
            </div>
        </div>
    );
}