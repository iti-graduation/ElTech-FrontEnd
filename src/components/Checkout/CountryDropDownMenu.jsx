import React from "react";

const CountryDropDownMenu = ({ name, value, onChange }) => {
  const countryObjectsArray = [
    { countryCode: "", countryName: "" },
    { countryCode: "AX", countryName: "Åland Islands" },
    { countryCode: "AF", countryName: "Afghanistan" },
    { countryCode: "AL", countryName: "Albania" },
    { countryCode: "DZ", countryName: "Algeria" },
    { countryCode: "AD", countryName: "Andorra" },
    { countryCode: "AO", countryName: "Angola" },
    { countryCode: "AI", countryName: "Anguilla" },
    { countryCode: "AQ", countryName: "Antarctica" },
    { countryCode: "AG", countryName: "Antigua and Barbuda" },
    { countryCode: "AR", countryName: "Argentina" },
    { countryCode: "AM", countryName: "Armenia" },
    { countryCode: "AW", countryName: "Aruba" },
    { countryCode: "AU", countryName: "Australia" },
    { countryCode: "AT", countryName: "Austria" },
    { countryCode: "AZ", countryName: "Azerbaijan" },
    { countryCode: "BS", countryName: "Bahamas" },
    { countryCode: "BH", countryName: "Bahrain" },
    { countryCode: "BD", countryName: "Bangladesh" },
    { countryCode: "BB", countryName: "Barbados" },
    { countryCode: "BY", countryName: "Belarus" },
    { countryCode: "PW", countryName: "Belau" },
    { countryCode: "BE", countryName: "Belgium" },
    { countryCode: "BZ", countryName: "Belize" },
    { countryCode: "BJ", countryName: "Benin" },
    { countryCode: "BM", countryName: "Bermuda" },
    { countryCode: "BT", countryName: "Bhutan" },
    { countryCode: "BO", countryName: "Bolivia" },
    { countryCode: "BQ", countryName: "Bonaire, Saint Eustatius and Saba" },
    { countryCode: "BA", countryName: "Bosnia and Herzegovina" },
    { countryCode: "BW", countryName: "Botswana" },
    { countryCode: "BV", countryName: "Bouvet Island" },
    { countryCode: "BR", countryName: "Brazil" },
    { countryCode: "IO", countryName: "British Indian Ocean Territory" },
    { countryCode: "VG", countryName: "British Virgin Islands" },
    { countryCode: "BN", countryName: "Brunei" },
    { countryCode: "BG", countryName: "Bulgaria" },
    { countryCode: "BF", countryName: "Burkina Faso" },
    { countryCode: "BI", countryName: "Burundi" },
    { countryCode: "KH", countryName: "Cambodia" },
    { countryCode: "CM", countryName: "Cameroon" },
    { countryCode: "CA", countryName: "Canada" },
    { countryCode: "CV", countryName: "Cape Verde" },
    { countryCode: "KY", countryName: "Cayman Islands" },
    { countryCode: "CF", countryName: "Central African Republic" },
    { countryCode: "TD", countryName: "Chad" },
    { countryCode: "CL", countryName: "Chile" },
    { countryCode: "CN", countryName: "China" },
    { countryCode: "CX", countryName: "Christmas Island" },
    { countryCode: "CC", countryName: "Cocos (Keeling) Islands" },
    { countryCode: "CO", countryName: "Colombia" },
    { countryCode: "KM", countryName: "Comoros" },
    { countryCode: "CG", countryName: "Congo (Brazzaville)" },
    { countryCode: "CD", countryName: "Congo (Kinshasa)" },
    { countryCode: "CK", countryName: "Cook Islands" },
    { countryCode: "CR", countryName: "Costa Rica" },
    { countryCode: "HR", countryName: "Croatia" },
    { countryCode: "CU", countryName: "Cuba" },
    { countryCode: "CW", countryName: "Curaçao" },
    { countryCode: "CY", countryName: "Cyprus" },
    { countryCode: "CZ", countryName: "Czech Republic" },
    { countryCode: "DK", countryName: "Denmark" },
    { countryCode: "DJ", countryName: "Djibouti" },
    { countryCode: "DM", countryName: "Dominica" },
    { countryCode: "DO", countryName: "Dominican Republic" },
    { countryCode: "EC", countryName: "Ecuador" },
    { countryCode: "EG", countryName: "Egypt" },
    { countryCode: "SV", countryName: "El Salvador" },
    { countryCode: "GQ", countryName: "Equatorial Guinea" },
    { countryCode: "ER", countryName: "Eritrea" },
    { countryCode: "EE", countryName: "Estonia" },
    { countryCode: "ET", countryName: "Ethiopia" },
    { countryCode: "FK", countryName: "Falkland Islands" },
    { countryCode: "FO", countryName: "Faroe Islands" },
    { countryCode: "FJ", countryName: "Fiji" },
    { countryCode: "FI", countryName: "Finland" },
    { countryCode: "FR", countryName: "France" },
    { countryCode: "GF", countryName: "French Guiana" },
    { countryCode: "PF", countryName: "French Polynesia" },
    { countryCode: "TF", countryName: "French Southern Territories" },
    { countryCode: "GA", countryName: "Gabon" },
    { countryCode: "GM", countryName: "Gambia" },
    { countryCode: "GE", countryName: "Georgia" },
    { countryCode: "DE", countryName: "Germany" },
    { countryCode: "GH", countryName: "Ghana" },
    { countryCode: "GI", countryName: "Gibraltar" },
    { countryCode: "GR", countryName: "Greece" },
    { countryCode: "GL", countryName: "Greenland" },
    { countryCode: "GD", countryName: "Grenada" },
    { countryCode: "GP", countryName: "Guadeloupe" },
    { countryCode: "GT", countryName: "Guatemala" },
    { countryCode: "GG", countryName: "Guernsey" },
    { countryCode: "GN", countryName: "Guinea" },
    { countryCode: "GW", countryName: "Guinea-Bissau" },
    { countryCode: "GY", countryName: "Guyana" },
    { countryCode: "HT", countryName: "Haiti" },
    { countryCode: "HM", countryName: "Heard Island and McDonald Islands" },
    { countryCode: "HN", countryName: "Honduras" },
    { countryCode: "HK", countryName: "Hong Kong" },
    { countryCode: "HU", countryName: "Hungary" },
    { countryCode: "IS", countryName: "Iceland" },
    { countryCode: "IN", countryName: "India" },
    { countryCode: "ID", countryName: "Indonesia" },
    { countryCode: "IR", countryName: "Iran" },
    { countryCode: "IQ", countryName: "Iraq" },
    { countryCode: "IM", countryName: "Isle of Man" },
    { countryCode: "IL", countryName: "Israel" },
    { countryCode: "IT", countryName: "Italy" },
    { countryCode: "CI", countryName: "Ivory Coast" },
    { countryCode: "JM", countryName: "Jamaica" },
    { countryCode: "JP", countryName: "Japan" },
    { countryCode: "JE", countryName: "Jersey" },
    { countryCode: "JO", countryName: "Jordan" },
    { countryCode: "KZ", countryName: "Kazakhstan" },
    { countryCode: "KE", countryName: "Kenya" },
    { countryCode: "KI", countryName: "Kiribati" },
    { countryCode: "KW", countryName: "Kuwait" },
    { countryCode: "KG", countryName: "Kyrgyzstan" },
    { countryCode: "LA", countryName: "Laos" },
    { countryCode: "LV", countryName: "Latvia" },
    { countryCode: "LB", countryName: "Lebanon" },
    { countryCode: "LS", countryName: "Lesotho" },
    { countryCode: "LR", countryName: "Liberia" },
    { countryCode: "LY", countryName: "Libya" },
    { countryCode: "LI", countryName: "Liechtenstein" },
    { countryCode: "LT", countryName: "Lithuania" },
    { countryCode: "LU", countryName: "Luxembourg" },
    { countryCode: "MO", countryName: "Macao S.A.R., China" },
    { countryCode: "MK", countryName: "Macedonia" },
    { countryCode: "MG", countryName: "Madagascar" },
    { countryCode: "MW", countryName: "Malawi" },
    { countryCode: "MY", countryName: "Malaysia" },
    { countryCode: "MV", countryName: "Maldives" },
    { countryCode: "ML", countryName: "Mali" },
    { countryCode: "MT", countryName: "Malta" },
    { countryCode: "MH", countryName: "Marshall Islands" },
    { countryCode: "MQ", countryName: "Martinique" },
    { countryCode: "MR", countryName: "Mauritania" },
    { countryCode: "MU", countryName: "Mauritius" },
    { countryCode: "YT", countryName: "Mayotte" },
    { countryCode: "MX", countryName: "Mexico" },
    { countryCode: "FM", countryName: "Micronesia" },
    { countryCode: "MD", countryName: "Moldova" },
    { countryCode: "MC", countryName: "Monaco" },
    { countryCode: "MN", countryName: "Mongolia" },
    { countryCode: "ME", countryName: "Montenegro" },
    { countryCode: "MS", countryName: "Montserrat" },
    { countryCode: "MA", countryName: "Morocco" },
    { countryCode: "MZ", countryName: "Mozambique" },
    { countryCode: "MM", countryName: "Myanmar" },
    { countryCode: "NA", countryName: "Namibia" },
    { countryCode: "NR", countryName: "Nauru" },
    { countryCode: "NP", countryName: "Nepal" },
    { countryCode: "NL", countryName: "Netherlands" },
    { countryCode: "AN", countryName: "Netherlands Antilles" },
    { countryCode: "NC", countryName: "New Caledonia" },
    { countryCode: "NZ", countryName: "New Zealand" },
    { countryCode: "NI", countryName: "Nicaragua" },
    { countryCode: "NE", countryName: "Niger" },
    { countryCode: "NG", countryName: "Nigeria" },
    { countryCode: "NU", countryName: "Niue" },
    { countryCode: "NF", countryName: "Norfolk Island" },
    { countryCode: "KP", countryName: "North Korea" },
    { countryCode: "NO", countryName: "Norway" },
    { countryCode: "OM", countryName: "Oman" },
    { countryCode: "PK", countryName: "Pakistan" },
    { countryCode: "PS", countryName: "Palestinian Territory" },
    { countryCode: "PA", countryName: "Panama" },
    { countryCode: "PG", countryName: "Papua New Guinea" },
    { countryCode: "PY", countryName: "Paraguay" },
    { countryCode: "PE", countryName: "Peru" },
    { countryCode: "PH", countryName: "Philippines" },
    { countryCode: "PN", countryName: "Pitcairn" },
    { countryCode: "PL", countryName: "Poland" },
    { countryCode: "PT", countryName: "Portugal" },
    { countryCode: "QA", countryName: "Qatar" },
    { countryCode: "IE", countryName: "Republic of Ireland" },
    { countryCode: "RE", countryName: "Reunion" },
    { countryCode: "RO", countryName: "Romania" },
    { countryCode: "RU", countryName: "Russia" },
    { countryCode: "RW", countryName: "Rwanda" },
    { countryCode: "ST", countryName: "São Tomé and Príncipe" },
    { countryCode: "BL", countryName: "Saint Barthélemy" },
    { countryCode: "SH", countryName: "Saint Helena" },
    { countryCode: "KN", countryName: "Saint Kitts and Nevis" },
    { countryCode: "LC", countryName: "Saint Lucia" },
    { countryCode: "SX", countryName: "Saint Martin (Dutch part)" },
    { countryCode: "MF", countryName: "Saint Martin (French part)" },
    { countryCode: "PM", countryName: "Saint Pierre and Miquelon" },
    { countryCode: "VC", countryName: "Saint Vincent and the Grenadines" },
    { countryCode: "SM", countryName: "San Marino" },
    { countryCode: "SA", countryName: "Saudi Arabia" },
    { countryCode: "SN", countryName: "Senegal" },
    { countryCode: "RS", countryName: "Serbia" },
    { countryCode: "SC", countryName: "Seychelles" },
    { countryCode: "SL", countryName: "Sierra Leone" },
    { countryCode: "SG", countryName: "Singapore" },
    { countryCode: "SK", countryName: "Slovakia" },
    { countryCode: "SI", countryName: "Slovenia" },
    { countryCode: "SB", countryName: "Solomon Islands" },
    { countryCode: "SO", countryName: "Somalia" },
    { countryCode: "ZA", countryName: "South Africa" },
    { countryCode: "GS", countryName: "South Georgia/Sandwich Islands" },
    { countryCode: "KR", countryName: "South Korea" },
    { countryCode: "SS", countryName: "South Sudan" },
    { countryCode: "ES", countryName: "Spain" },
    { countryCode: "LK", countryName: "Sri Lanka" },
    { countryCode: "SD", countryName: "Sudan" },
    { countryCode: "SR", countryName: "Suriname" },
    { countryCode: "SJ", countryName: "Svalbard and Jan Mayen" },
    { countryCode: "SZ", countryName: "Swaziland" },
    { countryCode: "SE", countryName: "Sweden" },
    { countryCode: "CH", countryName: "Switzerland" },
    { countryCode: "SY", countryName: "Syria" },
    { countryCode: "TW", countryName: "Taiwan" },
    { countryCode: "TJ", countryName: "Tajikistan" },
    { countryCode: "TZ", countryName: "Tanzania" },
    { countryCode: "TH", countryName: "Thailand" },
    { countryCode: "TL", countryName: "Timor-Leste" },
    { countryCode: "TG", countryName: "Togo" },
    { countryCode: "TK", countryName: "Tokelau" },
    { countryCode: "TO", countryName: "Tonga" },
    { countryCode: "TT", countryName: "Trinidad and Tobago" },
    { countryCode: "TN", countryName: "Tunisia" },
    { countryCode: "TR", countryName: "Turkey" },
    { countryCode: "TM", countryName: "Turkmenistan" },
    { countryCode: "TC", countryName: "Turks and Caicos Islands" },
    { countryCode: "TV", countryName: "Tuvalu" },
    { countryCode: "UG", countryName: "Uganda" },
    { countryCode: "UA", countryName: "Ukraine" },
    { countryCode: "AE", countryName: "United Arab Emirates" },
    { countryCode: "GB", countryName: "United Kingdom (UK)" },
    { countryCode: "US", countryName: "United States (US)" },
    { countryCode: "UY", countryName: "Uruguay" },
    { countryCode: "UZ", countryName: "Uzbekistan" },
    { countryCode: "VU", countryName: "Vanuatu" },
    { countryCode: "VA", countryName: "Vatican" },
    { countryCode: "VE", countryName: "Venezuela" },
    { countryCode: "VN", countryName: "Vietnam" },
    { countryCode: "WF", countryName: "Wallis and Futuna" },
    { countryCode: "EH", countryName: "Western Sahara" },
    { countryCode: "WS", countryName: "Western Samoa" },
    { countryCode: "YE", countryName: "Yemen" },
    { countryCode: "ZM", countryName: "Zambia" },
    { countryCode: "ZW", countryName: "Zimbabwe" },
  ];

  return (
    <select
      className="country_to_state country_select"
      id="billing_country"
      name={name}
      onChange={onChange}
      value={value}
    >
      {countryObjectsArray.map((item) => (
        <option key={item.countryCode} value={item.countryCode}>{item.countryName}</option>
      ))}
    </select>
  );
};

export default CountryDropDownMenu;
