export const COUNTRY_CURRENCY_LIST: { name: string, code: string, currency: string }[] = [
  { name: 'Algeria', code: 'dza', currency: 'DZD' },
  { name: 'Angola', code: 'ago', currency: 'AOA' },
  { name: 'Benin', code: 'ben', currency: 'XOF' },
  { name: 'Botswana', code: 'bwa', currency: 'BWP' },
  { name: 'Burkina Faso', code: 'bfa', currency: 'XOF' },
  { name: 'Burundi', code: 'bdi', currency: 'BIF' },
  { name: 'Cabo Verde', code: 'cpv', currency: 'CVE' },
  { name: 'Cameroon', code: 'cmr', currency: 'XAF' },
  { name: 'Central African Republic', code: 'caf', currency: 'XAF' },
  { name: 'Chad', code: 'tcd', currency: 'XAF' },
  { name: 'Comoros', code: 'com', currency: 'KMF' },
  { name: 'Congo', code: 'cog', currency: 'XAF' },
  { name: 'Congo (Democratic Republic of the)', code: 'cod', currency: 'CDF' },
  { name: 'Djibouti', code: 'dji', currency: 'DJF' },
  { name: 'Egypt', code: 'egy', currency: 'EGP' },
  { name: 'Equatorial Guinea', code: 'gnq', currency: 'XAF' },
  { name: 'Eritrea', code: 'eri', currency: 'ERN' },
  { name: 'Eswatini', code: 'swz', currency: 'SZL' },
  { name: 'Ethiopia', code: 'eth', currency: 'ETB' },
  { name: 'Gabon', code: 'gab', currency: 'XAF' },
  { name: 'Gambia', code: 'gmb', currency: 'GMD' },
  { name: 'Ghana', code: 'gha', currency: 'GHS' },
  { name: 'Guinea', code: 'gin', currency: 'GNF' },
  { name: 'Guinea-Bissau', code: 'gnb', currency: 'XOF' },
  { name: 'Ivory Coast', code: 'civ', currency: 'XOF' },
  { name: 'Kenya', code: 'ken', currency: 'KES' },
  { name: 'Lesotho', code: 'lso', currency: 'LSL' },
  { name: 'Liberia', code: 'lbr', currency: 'LRD' },
  { name: 'Libya', code: 'lby', currency: 'LYD' },
  { name: 'Madagascar', code: 'mdg', currency: 'MGA' },
  { name: 'Malawi', code: 'mwi', currency: 'MWK' },
  { name: 'Mali', code: 'mli', currency: 'XOF' },
  { name: 'Mauritania', code: 'mrt', currency: 'MRU' },
  { name: 'Mauritius', code: 'mus', currency: 'MUR' },
  { name: 'Morocco', code: 'mar', currency: 'MAD' },
  { name: 'Mozambique', code: 'moz', currency: 'MZN' },
  { name: 'Namibia', code: 'nam', currency: 'NAD' },
  { name: 'Niger', code: 'ner', currency: 'XOF' },
  { name: 'Nigeria', code: 'nga', currency: 'NGN' },
  { name: 'Rwanda', code: 'rwa', currency: 'RWF' },
  { name: 'Sao Tome and Principe', code: 'stp', currency: 'STN' },
  { name: 'Senegal', code: 'sen', currency: 'XOF' },
  { name: 'Seychelles', code: 'syc', currency: 'SCR' },
  { name: 'Sierra Leone', code: 'sle', currency: 'SLE' },
  { name: 'Somalia', code: 'som', currency: 'SOS' },
  { name: 'South Africa', code: 'zaf', currency: 'ZAR' },
  { name: 'South Sudan', code: 'ssd', currency: 'SSP' },
  { name: 'Sudan', code: 'sdn', currency: 'SDG' },
  { name: 'Tanzania, United Republic of', code: 'tza', currency: 'TZS' },
  { name: 'Togo', code: 'tgo', currency: 'XOF' },
  { name: 'Tunisia', code: 'tun', currency: 'TND' },
  { name: 'Uganda', code: 'uga', currency: 'UGX' },
  { name: 'Zambia', code: 'zmb', currency: 'ZMW' },
  { name: 'Zimbabwe', code: 'zwe', currency: 'ZWL' },
];



/* 
export const COUNTRIES: string[] = [
  '',
  'Afghanistan',
  'Albania',
  'Algeria',
  'American Samoa',
  'Andorra',
  'Angola',
  'Anguilla',
  'Antarctica',
  'Antigua and Barbuda',
  'Argentina',
  'Armenia',
  'Aruba',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bermuda',
  'Bhutan',
  'Bolivia (Plurinational State of)',
  'Bonaire, Sint Eustatius and Saba',
  'Bosnia and Herzegovina',
  'Botswana',
  'Bouvet Island',
  'Brazil',
  'British Indian Ocean Territory',
  'Brunei Darussalam',
  'Bulgaria',
  'Burkina Faso',
  'Burundi',
  'Cabo Verde',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Cayman Islands',
  'Central African Republic',
  'Chad',
  'Chile',
  'China',
  'Christmas Island',
  'Cocos (Keeling) Islands',
  'Colombia',
  'Comoros',
  'Congo',
  'Congo (Democratic Republic of the)',
  'Cook Islands',
  'Costa Rica',
  'Croatia',
  'Cuba',
  'Curaçao',
  'Cyprus',
  'Czech Republic',
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Eritrea',
  'Estonia',
  'Ethiopia',
  'Falkland Islands (Malvinas)',
  'Faroe Islands',
  'Fiji',
  'Finland',
  'France',
  'French Guiana',
  'French Polynesia',
  'French Southern Territories',
  'Gabon',
  'Gambia',
  'Georgia',
  'Germany',
  'Ghana',
  'Gibraltar',
  'Greece',
  'Greenland',
  'Grenada',
  'Guadeloupe',
  'Guam',
  'Guatemala',
  'Guernsey',
  'Guinea',
  'Guinea-Bissau',
  'Guyana',
  'Haiti',
  'Heard Island and McDonald Islands',
  'Holy See',
  'Honduras',
  'Hong Kong',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran (Islamic Republic of)',
  'Iraq',
  'Ireland',
  'Isle of Man',
  'Israel',
  'Italy',
  'Jamaica',
  'Japan',
  'Jersey',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kiribati',
  'Korea (Democratic People\'s Republic of)',
  'Korea (Republic of)',
  'Kuwait',
  'Kyrgyzstan',
  'Lao People\'s Democratic Republic',
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Macao',
  'Macedonia (the former Yugoslav Republic of)',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Marshall Islands',
  'Martinique',
  'Mauritania',
  'Mauritius',
  'Mayotte',
  'Mexico',
  'Micronesia (Federated States of)',
  'Moldova (Republic of)',
  'Monaco',
  'Mongolia',
  'Montenegro',
  'Montserrat',
  'Morocco',
  'Mozambique',
  'Myanmar',
  'Namibia',
  'Nauru',
  'Nepal',
  'Netherlands',
  'New Caledonia',
  'New Zealand',
  'Nicaragua',
  'Niger',
  'Nigeria',
  'Niue',
  'Norfolk Island',
  'Northern Mariana Islands',
  'Norway',
  'Oman',
  'Pakistan',
  'Palau',
  'Palestine, State of',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines',
  'Pitcairn',
  'Poland',
  'Portugal',
  'Puerto Rico',
  'Qatar',
  'Réunion',
  'Romania',
  'Russian Federation',
  'Rwanda',
  'Saint Barthélemy',
  'Saint Helena, Ascension and Tristan da Cunha',
  'Saint Kitts and Nevis',
  'Saint Lucia',
  'Saint Martin (French part)',
  'Saint Pierre and Miquelon',
  'Saint Vincent and the Grenadines',
  'Samoa',
  'San Marino',
  'Sao Tome and Principe',
  'Saudi Arabia',
  'Senegal',
  'Serbia',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Sint Maarten (Dutch part)',
  'Slovakia',
  'Slovenia',
  'Solomon Islands',
  'Somalia',
  'South Africa',
  'South Georgia and the South Sandwich Islands',
  'South Sudan',
  'Spain',
  'Sri Lanka',
  'Sudan',
  'Suriname',
  'Svalbard and Jan Mayen',
  'Swaziland',
  'Sweden',
  'Switzerland',
  'Syrian Arab Republic',
  'Taiwan, Province of China',
  'Tajikistan',
  'Tanzania, United Republic of',
  'Thailand',
  'Timor-Leste',
  'Togo',
  'Tokelau',
  'Tonga',
  'Trinidad and Tobago',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Turks and Caicos Islands',
  'Tuvalu',
  'Uganda',
  'Ukraine',
  'United Arab Emirates',
  'United Kingdom of Great Britain and Northern Ireland',
  'United States of America',
  'United States Minor Outlying Islands',
  'Uruguay',
  'Uzbekistan',
  'Vanuatu',
  'Venezuela (Bolivarian Republic of)',
  'Viet Nam',
  'Virgin Islands (British)',
  'Virgin Islands (U.S.)',
  'Wallis and Futuna',
  'Western Sahara',
  'Yemen',
  'Zambia',
  'Zimbabwe',
]; */