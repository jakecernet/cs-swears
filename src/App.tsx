import React from "react";
import "./App.css";

import ArabicIMG from "./icons/arabic.svg";
import AustrianIMG from "./icons/austrian.svg";
import CzechIMG from "./icons/czech.svg";
import GermanIMG from "./icons/german.svg";
import JamaicanIMG from "./icons/jamaican.svg";
import PolishIMG from "./icons/polish.svg";
import RussianIMG from "./icons/russian.svg";
import SlovakianIMG from "./icons/slovakian.svg";
import SlovenianIMG from "./icons/slovenian.svg";

import Arabic from "./pages/arabic.js";
import Austrian from "./pages/austrian.js";
import Czech from "./pages/czech.js";
import German from "./pages/german.js";
import Jamaican from "./pages/jamaican.js";
import Polish from "./pages/polish.js";
import Russian from "./pages/russian.js";
import Slovakian from "./pages/slovakian.js";
import Slovenian from "./pages/slovenian.js";

function App() {
	const [language, setLanguage] = React.useState("");

	return (
		<div>
			<div className="html">
				<h1>CSGO Swear word search</h1>
				<p>Choose the language you want to know the swear words in</p>
				<div className="selector">
					<ul>
						<li onClick={() => setLanguage("arabic")}>
							<img src={ArabicIMG} alt="Arabic" />
						</li>
						<li onClick={() => setLanguage("austrian")}>
							<img src={AustrianIMG} alt="Austrian" />
						</li>
						<li onClick={() => setLanguage("czech")}>
							<img src={CzechIMG} alt="Czech" />
						</li>
						<li onClick={() => setLanguage("german")}>
							<img src={GermanIMG} alt="German" />
						</li>
						<li onClick={() => setLanguage("jamaican")}>
							<img src={JamaicanIMG} alt="Jamaican" />
						</li>
						<li onClick={() => setLanguage("polish")}>
							<img src={PolishIMG} alt="Polish" />
						</li>
						<li onClick={() => setLanguage("russian")}>
							<img src={RussianIMG} alt="Russian" />
						</li>
						<li onClick={() => setLanguage("slovakian")}>
							<img src={SlovakianIMG} alt="Slovakian" />
						</li>
						<li onClick={() => setLanguage("slovenian")}>
							<img src={SlovenianIMG} alt="Slovenian" />
						</li>
            <li onClick={() => setLanguage("useful")}>
              <p>Generaly useful words</p>
            </li>
					</ul>
				</div>
			</div>
			<div className="display">
				{language === "arabic" && <Arabic />}
				{language === "austrian" && <Austrian />}
				{language === "czech" && <Czech />}
				{language === "german" && <German />}
				{language === "jamaican" && <Jamaican />}
				{language === "polish" && <Polish />}
				{language === "russian" && <Russian />}
				{language === "slovakian" && <Slovakian />}
				{language === "slovenian" && <Slovenian />}
			</div>
		</div>
	);
}

export default App;
