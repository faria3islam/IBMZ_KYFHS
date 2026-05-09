export const municipalities = [
	// Canada — Ontario
	{
		id: 1,
		name: 'Windsor, ON',
		region: 'Essex County',
		country: 'Canada',
		waterSource: 'Detroit River intake and municipal treatment network',
		infrastructure: ['Lakefront treatment plant', 'Combined sewer network', 'Shared floodplain pumps'],
		adjacentCommunities: ['Tecumseh, ON'],
		notes: 'High density urban zone with shared stormwater infrastructure.'
	},
	{
		id: 2,
		name: 'Tecumseh, ON',
		region: 'Essex County',
		country: 'Canada',
		waterSource: 'Regional distribution system fed by Windsor treatment assets',
		infrastructure: ['Lift station network', 'Stormwater detention ponds', 'Shared emergency backflow controls'],
		adjacentCommunities: ['Windsor, ON', 'Lakeshore, ON'],
		notes: 'Nearby community with overflow sensitivity during heavy rain.'
	},
	{
		id: 3,
		name: 'Chatham, ON',
		region: 'Chatham-Kent',
		country: 'Canada',
		waterSource: 'Thames River watershed treatment system',
		infrastructure: ['Downtown mains', 'Sanitary bypass monitoring', 'Water tower storage'],
		adjacentCommunities: ['Wallaceburg, ON'],
		notes: 'Separate system but still exposed to maintenance-related advisories.'
	},
	{
		id: 4,
		name: 'Toronto, ON',
		region: 'Greater Toronto Area',
		country: 'Canada',
		waterSource: 'Lake Ontario — R.C. Harris and F.J. Horgan water treatment plants',
		infrastructure: ['Combined sewer overflow tunnels', 'Deep lake cooling intake', 'Watermain distribution grid'],
		adjacentCommunities: ['Mississauga, ON', 'Brampton, ON'],
		notes: 'Largest city in Canada with aging combined sewer systems in older neighbourhoods.'
	},
	{
		id: 5,
		name: 'Ottawa, ON',
		region: 'National Capital Region',
		country: 'Canada',
		waterSource: 'Ottawa River and Rideau River dual treatment system',
		infrastructure: ['Lemieux Island water purification plant', 'Britannia filtration facility', 'Watermain trunk mains'],
		adjacentCommunities: ['Gatineau, QC'],
		notes: 'River-fed system with seasonal turbidity risk during spring runoff.'
	},
	// Canada — British Columbia
	{
		id: 6,
		name: 'Vancouver, BC',
		region: 'Metro Vancouver',
		country: 'Canada',
		waterSource: 'Capilano, Seymour, and Coquitlam mountain reservoir system',
		infrastructure: ['Seymour-Capilano filtration plant', 'Gravity-fed distribution tunnels', 'Regional main breaks response network'],
		adjacentCommunities: ['Burnaby, BC', 'Surrey, BC'],
		notes: 'Unfiltered mountain source historically; filtration plant now active since 2009.'
	},
	// Canada — Alberta
	{
		id: 7,
		name: 'Calgary, AB',
		region: 'Southern Alberta',
		country: 'Canada',
		waterSource: 'Bow River and Elbow River dual treatment plants',
		infrastructure: ['Glenmore and Bearspaw water treatment plants', 'Flood mitigation berms', 'Stormwater wetland cells'],
		adjacentCommunities: ['Airdrie, AB', 'Cochrane, AB'],
		notes: 'River-sourced; high flood risk after 2013 event led to major infrastructure upgrades.'
	},
	// Canada — Quebec
	{
		id: 8,
		name: 'Montreal, QC',
		region: 'Greater Montreal',
		country: 'Canada',
		waterSource: 'St. Lawrence River — Charles-J.-Des Baillets and Atwater treatment plants',
		infrastructure: ['Aging downtown mains (some 100+ years old)', 'Combined sewer overflow points', 'Water meter monitoring network'],
		adjacentCommunities: ['Laval, QC', 'Longueuil, QC'],
		notes: 'Major combined sewer overflow events during heavy rain periods; ongoing infrastructure replacement.'
	},
	// United States — Michigan
	{
		id: 9,
		name: 'Detroit, MI',
		region: 'Southeast Michigan',
		country: 'United States',
		waterSource: 'Great Lakes Water Authority — Lake Huron and Detroit River intakes',
		infrastructure: ['Water Works Park treatment plant', 'Aging lead service lines (partial replacement underway)', 'Combined sewer overflow pipe network'],
		adjacentCommunities: ['Windsor, ON', 'Dearborn, MI'],
		notes: 'Cross-border system sharing Detroit River with Windsor, ON; ongoing lead pipe replacement program.'
	},
	{
		id: 10,
		name: 'Chicago, IL',
		region: 'Northeast Illinois',
		country: 'United States',
		waterSource: 'Lake Michigan — Jardine and South Water filtration plants',
		infrastructure: ['TARP deep tunnel system for overflow', 'Metropolitan Water Reclamation District network', 'Lead service line inventory'],
		adjacentCommunities: ['Evanston, IL', 'Gary, IN'],
		notes: 'Large lake source with well-funded infrastructure; lead service lines still present in older areas.'
	},
	// United States — California
	{
		id: 11,
		name: 'Los Angeles, CA',
		region: 'Southern California',
		country: 'United States',
		waterSource: 'Colorado River aqueduct, State Water Project, and local groundwater',
		infrastructure: ['Jensen and Weymouth filtration plants', 'Local groundwater contamination monitoring', 'Drought-resilient recycled water network'],
		adjacentCommunities: ['Long Beach, CA', 'Pasadena, CA'],
		notes: 'Multi-source system with drought vulnerability; PFAS contamination detected in some groundwater wells.'
	},
	// India
	{
		id: 16,
		name: 'Mumbai, MH',
		region: 'Maharashtra',
		country: 'India',
		waterSource: 'Seven lakes system — Tulsi, Vihar, Upper Vaitarna, Middle Vaitarna, Bhatsa, Tansa, Modak Sagar',
		infrastructure: ['Bhagwat Worli and Parel treatment plants', 'Aging distribution mains in older wards', 'Combined drainage and sewage network in low-lying slum areas'],
		adjacentCommunities: ['Thane, MH', 'Navi Mumbai, MH'],
		notes: 'High-density coastal city with monsoon flooding risk. Aging pipes in Dharavi and M-ward areas face seasonal contamination risk.'
	},
	{
		id: 17,
		name: 'Delhi, DL',
		region: 'National Capital Territory',
		country: 'India',
		waterSource: 'Yamuna River — Wazirabad, Chandrawal, and Sonia Vihar treatment plants; Bhakra canal supply',
		infrastructure: ['Aging trunk mains with high NRW (non-revenue water) losses', 'Sewage treatment plants at Okhla and Rithala', 'Groundwater contamination monitoring network'],
		adjacentCommunities: ['Noida, UP', 'Gurgaon, HR'],
		notes: 'Yamuna heavily polluted upstream; ammonia spikes during festival seasons reduce treatability. Groundwater fluoride and arsenic issues in outer districts.'
	},
	{
		id: 18,
		name: 'Chennai, TN',
		region: 'Tamil Nadu',
		country: 'India',
		waterSource: 'Poondi, Red Hills, Chembarambakkam, and Veeranam reservoirs; desalination plants at Minjur and Nemmeli',
		infrastructure: ['CMWSSB distribution network', 'Two operational desalination plants (200 MLD total)', 'Managed aquifer recharge programme'],
		adjacentCommunities: ['Kanchipuram, TN', 'Tiruvallur, TN'],
		notes: 'Severe drought city that ran out of water in 2019; now partially desalination-dependent. High water stress between June and October pre-monsoon.'
	},
	{
		id: 19,
		name: 'Bengaluru, KA',
		region: 'Karnataka',
		country: 'India',
		waterSource: 'Cauvery River — T.K. Halli treatment plant; supplemental groundwater from borewells',
		infrastructure: ['BWSSB piped supply covering ~50% of area', 'Over 14,000 registered borewells for remaining supply', 'Bellandur and Varthur lake sewage overflow monitoring'],
		adjacentCommunities: ['Tumkur, KA', 'Ramanagara, KA'],
		notes: 'Rapid urbanisation outpacing piped supply; lake systems heavily polluted with sewage froth events. Groundwater depletion a major issue.'
	},
	{
		id: 20,
		name: 'Kolkata, WB',
		region: 'West Bengal',
		country: 'India',
		waterSource: 'Hooghly River (Ganges distributary) — Garden Reach and Palta treatment plants',
		infrastructure: ['KMC underground drainage network (partly Victorian-era)', 'Salt Lake pumping stations', 'Wetland-based natural wastewater treatment (East Kolkata Wetlands)'],
		adjacentCommunities: ['Howrah, WB', 'Barrackpore, WB'],
		notes: 'River turbidity spikes during monsoon. East Kolkata Wetlands treat wastewater via aquaculture — a unique RAG-relevant infrastructure relationship.'
	},
	{
		id: 21,
		name: 'Hyderabad, TS',
		region: 'Telangana',
		country: 'India',
		waterSource: 'Krishna and Godavari rivers via HMWSSB supply; Manjira and Singur reservoirs',
		infrastructure: ['Ameenpur and Yellampet treatment plants', 'Hussain Sagar lake pollution monitoring', 'SCADA-based distribution monitoring system'],
		adjacentCommunities: ['Secunderabad, TS', 'Cyberabad, TS'],
		notes: 'Hussain Sagar lake receives industrial and domestic effluents; lake water not used for drinking but downstream contamination risk exists.'
	},
	// United Kingdom — England
	{
		id: 12,
		name: 'London, UK',
		region: 'Greater London',
		country: 'United Kingdom',
		waterSource: 'Thames River and Lee Valley reservoirs — Thames Water treatment network',
		infrastructure: ['Coppermills and Hampton treatment works', 'Victorian-era brick sewer network', 'Thames Tideway Tunnel (Supersewer, completed 2025)'],
		adjacentCommunities: ['Reading, UK', 'Guildford, UK'],
		notes: 'Historic sewer system with long-running combined sewer overflow issues; Tideway Tunnel now reducing Thames pollution.'
	},
	{
		id: 13,
		name: 'Birmingham, UK',
		region: 'West Midlands',
		country: 'United Kingdom',
		waterSource: 'Elan Valley reservoir aqueduct and local Welsh catchments — Severn Trent Water',
		infrastructure: ['Frankley and Whitacre treatment works', 'Victorian pipeline network', 'Reservoir drought storage system'],
		adjacentCommunities: ['Coventry, UK', 'Wolverhampton, UK'],
		notes: 'Victorian infrastructure with active upgrade programme; Severn Trent Water drought plans active intermittently.'
	},
	// Australia — New South Wales
	{
		id: 14,
		name: 'Sydney, AU',
		region: 'New South Wales',
		country: 'Australia',
		waterSource: 'Warragamba Dam and Upper Nepean catchments — Sydney Water distribution',
		infrastructure: ['Prospect Water Filtration Plant', 'Sydney desalination plant (drought backup)', 'Stormwater harvesting network'],
		adjacentCommunities: ['Parramatta, AU', 'Newcastle, AU'],
		notes: 'Primary dam-fed city with desalination backup capacity; after-storm turbidity events during heavy rainfall.'
	},
	{
		id: 15,
		name: 'Melbourne, AU',
		region: 'Victoria',
		country: 'Australia',
		waterSource: 'Thomson, Yarra, and Upper Yarra catchment system — Melbourne Water',
		infrastructure: ['Silvan and Sugarloaf reservoirs', 'North South Pipeline drought connection', 'Advanced water recycling plants'],
		adjacentCommunities: ['Geelong, AU', 'Ballarat, AU'],
		notes: 'Highly protected catchment with low contamination risk historically; drought vulnerability in extended dry spells.'
	}
];

export default municipalities;
