import { QrCodeGenerator } from "./components/Generate/QrCodeGenerator";
import { QrCodeScanner } from "./components/Scan/QrCodeScanner";
import { Navigation } from "./components/Navigation/Navigation";
import { ForWebGame } from "./components/ForWebGame/ForWebGame";
import { Routes, Route } from "react-router-dom";
import { GenerateHistory } from "./components/History/GenerateHistory";
import { ScanHistory } from "./components/History/ScanHistory";

export const Layout = () => {
    return (
        <div>
            <Navigation/>

            <Routes>
                <Route path="/generate" element={<QrCodeGenerator />}></Route>
                <Route path="/scan" element={<QrCodeScanner />}></Route>
                <Route path="/scanHistory" element={<ScanHistory />}></Route>
                <Route path="/generateHistory" element={<GenerateHistory />}></Route>
                {/* <Route path="/game" element={<ForWebGame />}></Route> */}
            </Routes>
        </div> 
    );
};