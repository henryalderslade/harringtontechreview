//SKills Component

import '../feature-script'
import '../init'
import {o} from '../init'

export function registerSkills() {

if(document.getElementById(("skills"))) {
document.getElementById("skills").innerHTML = `   
    <div class="container">
        <div class="row">
            <div id="content">
                <div class="legend">
                    <h1>Legend:</h1>
                    <div class="skills">
                        <ul>
                            <li class="html">HTML5</li>
                            <li class="css">CSS3</li>
                            <li class="php">PHP</li>
                            <li class="jq">JavaScript</li>
                            <li class="sql">MySQL</li>
                        </ul>
                    </div>	
                </div>
                <div id="diagram"></div>
            </div>

            <div class="get">
                <div class="arc">
                    <span class="text">HTML5</span>
                    <input type="hidden" class="percent" value="95" />
                    <input type="hidden" class="color" value="#88B8E6" />
                </div>
                <div class="arc">
                    <span class="text">CSS3</span>
                    <input type="hidden" class="percent" value="85" />
                    <input type="hidden" class="color" value="#D84F5F" />
                </div>
                
                <div class="arc">
                    <span class="text">PHP</span>
                    <input type="hidden" class="percent" value="70" />
                    <input type="hidden" class="color" value="#BEDBE9" />
                </div>
                <div class="arc">
                    <span class="text">JavaScript</span>
                    <input type="hidden" class="percent" value="65" />
                    <input type="hidden" class="color" value="#97BE0D" />
                </div>
                <div class="arc">
                    <span class="text">MySQL</span>
                    <input type="hidden" class="percent" value="55" />
                    <input type="hidden" class="color" value="#EDEBEE" />
                </div>
            </div>
        </div>
    </div>
    `
    o.init()
    }
}