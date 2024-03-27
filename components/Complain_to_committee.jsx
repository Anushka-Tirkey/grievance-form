import React from "react"
{/*import Dropdown from 'react-bootstrap/Dropdown';*/}
import RadioButton from "./RadioButton";
import "../components/ComplainToCommittee.css"

export default function Complain_to_committee()
{
    return(

        <div id="container">
        <img src="https://www.bitmesra.ac.in/SiteLogo/BIT-Mesra.png" alt="logo"/>
        <img src="https://icon-library.com/images/account-icon/account-icon-19.jpg" width="50px" height = "50px" align = "right"/>
        <h1>COMPLAIN TO GRIEVANCE COMMITTEE</h1>
        <form id="submissionForm" onsubmit="return validateForm()">
            <table cellpadding="10">
                <tr>
                    <td><label for="name">Name</label></td>
                    <td><input type="text" id="name"/></td>
                </tr>
                <tr>
                    <td><label for="roll">Roll Number</label></td>
                    <td><input type="text" id="roll"/></td>
                </tr>
                <tr>
                    <td><label for="course">Course</label></td>
                    <td>
                        <div class="dropdown">
                            <select id="course">
                                <option value="sel">--select--</option>
                                <option value="arch">Architecture and Planning</option>
                                <option value="bio_eng">Bio-Engineering and Biotechnology</option>
                                <option value="civil_eng">Civil Engineering</option>
                                <option value="chem_eng">Chemical Engineering</option>
                                <option value="plastic_polymer_eng">Chemical Engineering (Plastic and Polymer)</option>
                                <option value="cs_eng">Computer Science & Engineering</option>
                                <option value="ee_eng">Electrical & Electronics Engineering</option>
                                <option value="ec_eng">Electronics & Communication Engineering</option>
                                <option value="mech_eng">Mechanical Engineering</option>
                                <option value="prod_eng">Production Engineering</option>
                                <option value="pharma">M. Pharma & B.Pharma</option>
                                <option value="it">Information Technology</option>
                                <option value="imsc_math_comp">IMSc Math & Computing</option>
                                <option value="mba">MBA</option>
                                <option value="mca">MCA</option>
                                <option value="bachelor_arch">Bachelor of Architecture</option>
                                <option value="bachelor_food_tech">Bachelor of Food Technology</option>
                            </select>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td><label for="program">Program</label></td>
                    <td>
                        <div class="dropdown">
                            <select id="program">
                                <option value="sel">--select--</option>
                                <option value="btech">B. Tech</option>
                                <option value="mtech">M. Tech</option>
                                <option value="msc">MSc</option>
                                <option value="imsc">IMSc</option>
                                <option value="phd">PhD</option>
                            </select>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td><label for="phno">Phone Number</label></td>
                    <td><input type="text" maxlength="10" minlength="10" id="phno"/></td>
                </tr>
                <tr>
                    <td><label for="email">Email-id</label></td>
                    <td><input type="text" id="email"/></td>
                </tr>
                <tr>
                    <td><label>Grievance Category</label></td>
                    <td>
                        <RadioButton/>
                    </td>
                </tr>
                <tr>
                    <td><label for="desc">Elaborate your grievance</label></td>
                    <td><textarea id="desc" rows="5"></textarea></td>
                </tr>
            </table>
        </form>
    </div>
    );
        {/*<div>
            <form>
                <label>Name</label>
                <input placeholder="name">
                </input>

                <label>Roll</label>
                <input placeholder="Roll number">
                </input>

                <label>Course</label>
                    <div class="dropdown">
                            <select id="course">
                                <option value="sel">--select--</option>
                                <option value="arch">Architecture and Planning</option>
                                <option value="bio_eng">Bio-Engineering and Biotechnology</option>
                                <option value="civil_eng">Civil Engineering</option>
                                <option value="chem_eng">Chemical Engineering</option>
                                <option value="plastic_polymer_eng">Chemical Engineering (Plastic and Polymer)</option>
                                <option value="cs_eng">Computer Science & Engineering</option>
                                <option value="ee_eng">Electrical & Electronics Engineering</option>
                                <option value="ec_eng">Electronics & Communication Engineering</option>
                                <option value="mech_eng">Mechanical Engineering</option>
                                <option value="prod_eng">Production Engineering</option>
                                <option value="pharma">M. Pharma & B.Pharma</option>
                                <option value="it">Information Technology</option>
                                <option value="imsc_math_comp">IMSc Math & Computing</option>
                                <option value="mba">MBA</option>
                                <option value="mca">MCA</option>
                                <option value="bachelor_arch">Bachelor of Architecture</option>
                                <option value="bachelor_food_tech">Bachelor of Food Technology</option>
                            </select>
                        </div>

                <label>Program</label>
                <div class="dropdown">
                            <select id="program">
                                <option value="sel">--select--</option>
                                <option value="btech">B. Tech</option>
                                <option value="mtech">M. Tech</option>
                                <option value="msc">MSc</option>
                                <option value="imsc">IMSc</option>
                                <option value="phd">PhD</option>
                            </select>
                        </div>

                <label>Phone Number</label>
                <input type="text" maxlength="10" minlength="10" id="phno"></input>

                <label>Email ID</label>
                <input type="text" id="email"/>

                <label>Grievance Category</label>
                <RadioButton/>


                <label>Elaborate your grievance</label>
                <textarea id="desc" rows="5"></textarea>

                </form>
    </div>*/}  
}