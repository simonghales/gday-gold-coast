import {VenueData} from './venues';

export interface _googleMarker {
  position: {
    lat: number,
    lng: number
  },
  key: string | number,
  defaultAnimation?: number,
  showInfo: boolean,
  venueData?: VenueData,
  eventData?: _freeEvent,
  type: string
}

export function getFreeEventMarkers(): _googleMarker[] {
  return FREE_EVENTS.items.map((eventData, index) => {
    return {
      position: {
        lat: eventData.lat,
        lng: eventData.long
      },
      key: index,
      defaultAnimation: 4,
      showInfo: false,
      type: 'free',
      eventData
    }
  });
}

export interface _freeEvents {
  items: _freeEvent[]
}

export interface _freeEvent {
  lat: number,
  long: number,
  title: string,
  author: string,
  thumbnail: string,
  location: string,
  time: string,
  description: string,
}

export const FREE_EVENTS: _freeEvents = {
  "status": "ok",
  "feed": {
    "url": "http://feeds.feedburner.com/gc-Active-Healthy",
    "title": "City of Gold Coast events|Active &amp; Healthy",
    "link": "http://www.goldcoast.qld.gov.au/community/active-healthy-calendar-41468.html",
    "author": "City of Gold Coast events » Active &amp; Healthy",
    "description": "Gold Coast Active and Healthy Program",
    "image": ""
  },
  "items": [{
    "lat": -27.894732,
    "long": 153.327572,
    "title": "Gold Coast running sessions and clubs",
    "pubDate": "",
    "link": "http://www.goldcoast.qld.gov.au/community/active-healthy-calendar-41468.html?trumbaEmbed=view%3Devent%26eventid%3D124243801",
    "guid": "http://uid.trumba.com/event/124243801",
    "author": "City of Gold Coast events » Active &amp; Healthy",
    "thumbnail": "",
    "location": "Jump2it Fitness Training Studio, 108 Helensvale Road, Helensvale",
    "time": "5am",
    "description": "Jump2it Fitness Training Studio, 108 Helensvale Road, Helensvale <br>Saturday, July 29, 2017, 5am <br><br><img src=\"http://www.trumba.com/i/DgCFUZdSFWOXLGAtvZg7haAq.jpg\" title=\"Gold Coast running sessions and clubs\" alt=\"Gold Coast running sessions and clubs\" width=\"100\" height=\"50\"><br><br>Running is often viewed as a solo sport, but you're missing out if you always hit the road by yourself. Join one of the many Gold Coast groups, improve your running and meet others enjoying the same activity. <br><br><b>Suburb</b>: Helensvale <br><b>Bookings required</b>: No <br><b>Category</b>: Running <br><b>Contact email</b>: <a href=\"mailto:dale@jump2it.com.au\" target=\"_blank\">dale@jump2it.com.au</a> <br><b>Contact name</b>: Jump2it Fitness Studio <br><b>Contact phone</b>: 0404 873 863 <br><b>Cost</b>: $8 <br><b>More info</b>: <a href=\"http://www.goldcoast.qld.gov.au/community/active-healthy-running-31287.html\" target=\"_blank\" title=\"http://www.goldcoast.qld.gov.au/community/active-healthy-running-31287.html\">www.goldcoast.qld.gov.au…</a> <br><br>\n",
    "content": "Jump2it Fitness Training Studio, 108 Helensvale Road, Helensvale <br>Saturday, July 29, 2017, 5am <br><br><img src=\"http://www.trumba.com/i/DgCFUZdSFWOXLGAtvZg7haAq.jpg\" title=\"Gold Coast running sessions and clubs\" alt=\"Gold Coast running sessions and clubs\" width=\"100\" height=\"50\"><br><br>Running is often viewed as a solo sport, but you're missing out if you always hit the road by yourself. Join one of the many Gold Coast groups, improve your running and meet others enjoying the same activity. <br><br><b>Suburb</b>: Helensvale <br><b>Bookings required</b>: No <br><b>Category</b>: Running <br><b>Contact email</b>: <a href=\"mailto:dale@jump2it.com.au\" target=\"_blank\">dale@jump2it.com.au</a> <br><b>Contact name</b>: Jump2it Fitness Studio <br><b>Contact phone</b>: 0404 873 863 <br><b>Cost</b>: $8 <br><b>More info</b>: <a href=\"http://www.goldcoast.qld.gov.au/community/active-healthy-running-31287.html\" target=\"_blank\" title=\"http://www.goldcoast.qld.gov.au/community/active-healthy-running-31287.html\">www.goldcoast.qld.gov.au…</a> <br><br>\n",
    "enclosure": [],
    "categories": ["http://schemas.google.com/g/2005#event"]
  }, {
    "lat": -28.087532,
    "long": 153.452801,
    "title": "Gold Coast running sessions and clubs",
    "pubDate": "",
    "link": "http://www.goldcoast.qld.gov.au/community/active-healthy-calendar-41468.html?trumbaEmbed=view%3Devent%26eventid%3D124243754",
    "guid": "http://uid.trumba.com/event/124243754",
    "author": "City of Gold Coast events » Active &amp; Healthy",
    "thumbnail": "",
    "location": "Justins Park, The Esplanade, Burleigh Heads",
    "time": "5am",
    "description": "Justins Park, The Esplanade, Burleigh Heads <br>Saturday, July 29, 2017, 5am <br><br><img src=\"http://www.trumba.com/i/DgCFUZdSFWOXLGAtvZg7haAq.jpg\" title=\"Gold Coast running sessions and clubs\" alt=\"Gold Coast running sessions and clubs\" width=\"100\" height=\"50\"><br><br>Running is often viewed as a solo sport, but you're missing out if you always hit the road by yourself. Join one of the many Gold Coast groups, improve your running and meet others enjoying the same activity. <br><br><b>Venue</b>: Justins Park <br><b>Address</b>: <a href=\"http://maps.google.com/?q=The+Esplanade%2C+Burleigh+Heads+QLD+4220%2C+Australia\" target=\"_blank\">The Esplanade, Burleigh Heads</a> <br><b>Suburb</b>: Burleigh Heads <br><b>Bookings required</b>: No <br><b>Category</b>: Running <br><b>Contact name</b>: RK Pod Runners, Ross <br><b>Cost</b>: Free <br><b>More info</b>: <a href=\"http://www.goldcoast.qld.gov.au/community/active-healthy-running-31287.html\" target=\"_blank\" title=\"http://www.goldcoast.qld.gov.au/community/active-healthy-running-31287.html\">www.goldcoast.qld.gov.au…</a> <br><br>\n",
    "content": "Justins Park, The Esplanade, Burleigh Heads <br>Saturday, July 29, 2017, 5am <br><br><img src=\"http://www.trumba.com/i/DgCFUZdSFWOXLGAtvZg7haAq.jpg\" title=\"Gold Coast running sessions and clubs\" alt=\"Gold Coast running sessions and clubs\" width=\"100\" height=\"50\"><br><br>Running is often viewed as a solo sport, but you're missing out if you always hit the road by yourself. Join one of the many Gold Coast groups, improve your running and meet others enjoying the same activity. <br><br><b>Venue</b>: Justins Park <br><b>Address</b>: <a href=\"http://maps.google.com/?q=The+Esplanade%2C+Burleigh+Heads+QLD+4220%2C+Australia\" target=\"_blank\">The Esplanade, Burleigh Heads</a> <br><b>Suburb</b>: Burleigh Heads <br><b>Bookings required</b>: No <br><b>Category</b>: Running <br><b>Contact name</b>: RK Pod Runners, Ross <br><b>Cost</b>: Free <br><b>More info</b>: <a href=\"http://www.goldcoast.qld.gov.au/community/active-healthy-running-31287.html\" target=\"_blank\" title=\"http://www.goldcoast.qld.gov.au/community/active-healthy-running-31287.html\">www.goldcoast.qld.gov.au…</a> <br><br>\n",
    "enclosure": [],
    "categories": ["http://schemas.google.com/g/2005#event"]
  }, {
    "lat": -28.087532,
    "long": 153.452801,
    "title": "Gold Coast running sessions and clubs",
    "pubDate": "",
    "link": "http://www.goldcoast.qld.gov.au/community/active-healthy-calendar-41468.html?trumbaEmbed=view%3Devent%26eventid%3D124243848",
    "guid": "http://uid.trumba.com/event/124243848",
    "author": "City of Gold Coast events » Active &amp; Healthy",
    "thumbnail": "",
    "location": "Justins Park, The Esplanade, Burleigh Heads",
    "time": "5:30am",
    "description": "Justins Park, The Esplanade, Burleigh Heads <br>Saturday, July 29, 2017, 5:30am <br><br><img src=\"http://www.trumba.com/i/DgCFUZdSFWOXLGAtvZg7haAq.jpg\" title=\"Gold Coast running sessions and clubs\" alt=\"Gold Coast running sessions and clubs\" width=\"100\" height=\"50\"><br><br>Running is often viewed as a solo sport, but you're missing out if you always hit the road by yourself. Join one of the many Gold Coast groups, improve your running and meet others enjoying the same activity. <br><br><b>Venue</b>: Justins Park <br><b>Address</b>: <a href=\"http://maps.google.com/?q=The+Esplanade%2C+Burleigh+Heads+QLD+4220%2C+Australia\" target=\"_blank\">The Esplanade, Burleigh Heads</a> <br><b>Suburb</b>: Burleigh Heads <br><b>Bookings required</b>: No <br><b>Category</b>: Running <br><b>Contact name</b>: Gold Coast Runners Club <br><b>Cost</b>: Gold coin <br><b>More info</b>: <a href=\"http://www.goldcoast.qld.gov.au/community/active-healthy-running-31287.html\" target=\"_blank\" title=\"http://www.goldcoast.qld.gov.au/community/active-healthy-running-31287.html\">www.goldcoast.qld.gov.au…</a> <br><br>\n",
    "content": "Justins Park, The Esplanade, Burleigh Heads <br>Saturday, July 29, 2017, 5:30am <br><br><img src=\"http://www.trumba.com/i/DgCFUZdSFWOXLGAtvZg7haAq.jpg\" title=\"Gold Coast running sessions and clubs\" alt=\"Gold Coast running sessions and clubs\" width=\"100\" height=\"50\"><br><br>Running is often viewed as a solo sport, but you're missing out if you always hit the road by yourself. Join one of the many Gold Coast groups, improve your running and meet others enjoying the same activity. <br><br><b>Venue</b>: Justins Park <br><b>Address</b>: <a href=\"http://maps.google.com/?q=The+Esplanade%2C+Burleigh+Heads+QLD+4220%2C+Australia\" target=\"_blank\">The Esplanade, Burleigh Heads</a> <br><b>Suburb</b>: Burleigh Heads <br><b>Bookings required</b>: No <br><b>Category</b>: Running <br><b>Contact name</b>: Gold Coast Runners Club <br><b>Cost</b>: Gold coin <br><b>More info</b>: <a href=\"http://www.goldcoast.qld.gov.au/community/active-healthy-running-31287.html\" target=\"_blank\" title=\"http://www.goldcoast.qld.gov.au/community/active-healthy-running-31287.html\">www.goldcoast.qld.gov.au…</a> <br><br>\n",
    "enclosure": [],
    "categories": ["http://schemas.google.com/g/2005#event"]
  }, {
    "lat": -28.154914,
    "long": 153.472118,
    "title": "Trail runners",
    "pubDate": "",
    "link": "http://www.goldcoast.qld.gov.au/community/active-healthy-calendar-41468.html?trumbaEmbed=view%3Devent%26eventid%3D124242674",
    "guid": "http://uid.trumba.com/event/124242674",
    "author": "City of Gold Coast events » Active &amp; Healthy",
    "thumbnail": "",
    "location": "Bienvenue Drive, Currumbin Waters (park at Allygators entrance)",
    "time": "5:30am",
    "description": "Bienvenue Drive, Currumbin Waters (park at Allygators entrance) <br>Saturday, July 29, 2017, 5:30am <br><br><img src=\"http://www.trumba.com/i/DgCFUZdSFWOXLGAtvZg7haAq.jpg\" title=\"Trail runners\" alt=\"Trail runners\" width=\"100\" height=\"50\"><br><br>Join a fun and friendly group of trail runners every Tuesday morning for some off-road fun. All ages welcome, although those aged under 13 years must be accompanied by a parent. <br><br><b>Suburb</b>: Currumbin Waters <br><b>Bookings required</b>: Yes <br><b>Category</b>: Running <br><b>Contact email</b>: <a href=\"mailto:matt@juddadventures.com.au\" target=\"_blank\">matt@juddadventures.com.au</a> <br><b>Contact name</b>: Gold Coast Trail Runners <br><b>Cost</b>: Free <br><br>\n",
    "content": "Bienvenue Drive, Currumbin Waters (park at Allygators entrance) <br>Saturday, July 29, 2017, 5:30am <br><br><img src=\"http://www.trumba.com/i/DgCFUZdSFWOXLGAtvZg7haAq.jpg\" title=\"Trail runners\" alt=\"Trail runners\" width=\"100\" height=\"50\"><br><br>Join a fun and friendly group of trail runners every Tuesday morning for some off-road fun. All ages welcome, although those aged under 13 years must be accompanied by a parent. <br><br><b>Suburb</b>: Currumbin Waters <br><b>Bookings required</b>: Yes <br><b>Category</b>: Running <br><b>Contact email</b>: <a href=\"mailto:matt@juddadventures.com.au\" target=\"_blank\">matt@juddadventures.com.au</a> <br><b>Contact name</b>: Gold Coast Trail Runners <br><b>Cost</b>: Free <br><br>\n",
    "enclosure": [],
    "categories": ["http://schemas.google.com/g/2005#event"]
  }, {
    "lat": -28.076974,
    "long": 153.414274,
    "title": "Active and Healthy group fit",
    "pubDate": "",
    "link": "http://www.goldcoast.qld.gov.au/community/active-healthy-calendar-41468.html?trumbaEmbed=view%3Devent%26eventid%3D124207853",
    "guid": "http://uid.trumba.com/event/124207853",
    "author": "City of Gold Coast events » Active &amp; Healthy",
    "thumbnail": "",
    "location": "Central Park, Varsity Lakes. Meet at Jetts, 15 Lake Street, Varsity Lakes",
    "time": "6 – 7am",
    "description": "Central Park, Varsity Lakes. Meet at Jetts, 15 Lake Street, Varsity Lakes <br>Saturday, July 29, 2017, 6 – 7am <br><br><img src=\"http://www.trumba.com/i/DgDmDL9QPAtRgL6ZoLKBJkpB.jpg\" title=\"Active and Healthy group fit\" alt=\"Active and Healthy group fit\" width=\"100\" height=\"50\"><br><br>Give your body an all-over and watch your health improve by joining these non-intimidating classes suitable for all ages and fitness levels. Sessions include circuits, boxing, core strengthening, function fitness and stretching. <br><br><b>Venue</b>: Jetts Varsity Lakes <br><b>Address</b>: <a href=\"http://maps.google.com/?q=15+Lake+St%2C+Varsity+Lakes+QLD+4227%2C+Australia\" target=\"_blank\">15 Lake Street, Varsity Lakes</a> <br><b>Suburb</b>: Varsity Lakes <br><b>Bookings required</b>: No <br><b>Category</b>: Group fitness <br><b>Contact name</b>: Jetts Varsity Lakes, Jay <br><b>Contact phone</b>: 0481 580 099 <br><b>Cost</b>: $5 <br><b>More info</b>: <a href=\"http://www.goldcoast.qld.gov.au/community/active-healthy-group-fitness-31443.html\" target=\"_blank\" title=\"http://www.goldcoast.qld.gov.au/community/active-healthy-group-fitness-31443.html\">www.goldcoast.qld.gov.au…</a> <br><br>\n",
    "content": "Central Park, Varsity Lakes. Meet at Jetts, 15 Lake Street, Varsity Lakes <br>Saturday, July 29, 2017, 6 – 7am <br><br><img src=\"http://www.trumba.com/i/DgDmDL9QPAtRgL6ZoLKBJkpB.jpg\" title=\"Active and Healthy group fit\" alt=\"Active and Healthy group fit\" width=\"100\" height=\"50\"><br><br>Give your body an all-over and watch your health improve by joining these non-intimidating classes suitable for all ages and fitness levels. Sessions include circuits, boxing, core strengthening, function fitness and stretching. <br><br><b>Venue</b>: Jetts Varsity Lakes <br><b>Address</b>: <a href=\"http://maps.google.com/?q=15+Lake+St%2C+Varsity+Lakes+QLD+4227%2C+Australia\" target=\"_blank\">15 Lake Street, Varsity Lakes</a> <br><b>Suburb</b>: Varsity Lakes <br><b>Bookings required</b>: No <br><b>Category</b>: Group fitness <br><b>Contact name</b>: Jetts Varsity Lakes, Jay <br><b>Contact phone</b>: 0481 580 099 <br><b>Cost</b>: $5 <br><b>More info</b>: <a href=\"http://www.goldcoast.qld.gov.au/community/active-healthy-group-fitness-31443.html\" target=\"_blank\" title=\"http://www.goldcoast.qld.gov.au/community/active-healthy-group-fitness-31443.html\">www.goldcoast.qld.gov.au…</a> <br><br>\n",
    "enclosure": [],
    "categories": ["http://schemas.google.com/g/2005#event"]
  }, {
    "lat": -28.167410,
    "long": 153.540220,
    "title": "Active &amp; Healthy Yoga",
    "pubDate": "",
    "link": "http://www.goldcoast.qld.gov.au/community/active-healthy-calendar-41468.html?trumbaEmbed=view%3Devent%26eventid%3D124258598",
    "guid": "http://uid.trumba.com/event/124258598",
    "author": "City of Gold Coast events » Active &amp; Healthy",
    "thumbnail": "",
    "location": "Queen Elizabeth Park, Marine Parade, Coolangatta",
    "time": "6:30 – 7:30am",
    "description": "Saturday, July 29, 2017, 6:30 – 7:30am <br><br><img src=\"http://www.trumba.com/i/DgCbQDh-dufJlkPNIC7JQoWq.jpg\" title=\"Active &amp; Healthy Yoga\" alt=\"Active &amp; Healthy Yoga\" width=\"100\" height=\"50\"><br><br>Enjoy these well-balanced and gentle classes in which movements are connected with breath with a strong focus on the mind-body connection. Classes are appropriate for all ages and ability levels. <br><br><b>Venue</b>: Queen Elizabeth Park <br><b>Address</b>: <a href=\"http://maps.google.com/?q=Queen+Elizabeth+Park%2C+Coolangatta+QLD+4225%2C+Australia\" target=\"_blank\">Queen Elizabeth Park, Marine Parade, Coolangatta</a> <br><b>Suburb</b>: Coolangatta <br><b>Bookings required</b>: No <br><b>Category</b>: Yoga <br><b>Contact name</b>: Quicksilver Boardriders Coolangatta <br><b>Contact phone</b>: 07 5599 5551 <br><b>Cost</b>: Free <br><br>\n",
    "content": "Saturday, July 29, 2017, 6:30 – 7:30am <br><br><img src=\"http://www.trumba.com/i/DgCbQDh-dufJlkPNIC7JQoWq.jpg\" title=\"Active &amp; Healthy Yoga\" alt=\"Active &amp; Healthy Yoga\" width=\"100\" height=\"50\"><br><br>Enjoy these well-balanced and gentle classes in which movements are connected with breath with a strong focus on the mind-body connection. Classes are appropriate for all ages and ability levels. <br><br><b>Venue</b>: Queen Elizabeth Park <br><b>Address</b>: <a href=\"http://maps.google.com/?q=Queen+Elizabeth+Park%2C+Coolangatta+QLD+4225%2C+Australia\" target=\"_blank\">Queen Elizabeth Park, Marine Parade, Coolangatta</a> <br><b>Suburb</b>: Coolangatta <br><b>Bookings required</b>: No <br><b>Category</b>: Yoga <br><b>Contact name</b>: Quicksilver Boardriders Coolangatta <br><b>Contact phone</b>: 07 5599 5551 <br><b>Cost</b>: Free <br><br>\n",
    "enclosure": [],
    "categories": ["http://schemas.google.com/g/2005#event"]
  }, {
    "lat": -27.915564,
    "long": 153.329314,
    "title": "Community group fitness",
    "pubDate": "",
    "link": "http://www.goldcoast.qld.gov.au/community/active-healthy-calendar-41468.html?trumbaEmbed=view%3Devent%26eventid%3D124207468",
    "guid": "http://uid.trumba.com/event/124207468",
    "author": "City of Gold Coast events » Active &amp; Healthy",
    "thumbnail": "",
    "location": "Helensvale State School, 8 Linfield Road, Helensvale",
    "time": "6:30 – 7am",
    "description": "Helensvale State School, 8 Linfield Road, Helensvale <br>Saturday, July 29, 2017, 6:30 – 7am <br><br><img src=\"http://www.trumba.com/i/DgDmDL9QPAtRgL6ZoLKBJkpB.jpg\" title=\"Community group fitness\" alt=\"Community group fitness\" width=\"100\" height=\"50\"><br><br>Community group fitness. <br><br><b>Venue</b>: Helensvale State School <br><b>Address</b>: <a href=\"http://maps.google.com/?q=8+Lindfield+Rd%2C+Helensvale+QLD+4212%2C+Australia\" target=\"_blank\">8 Linfield Road, Helensvale</a> <br><b>Suburb</b>: Helensvale <br><b>Bookings required</b>: No <br><b>Category</b>: Group fitness <br><b>Contact name</b>: Mick Kuvx <br><b>Contact phone</b>: 0402 835 627 <br><b>More info</b>: <a href=\"http://www.goldcoast.qld.gov.au/community/active-healthy-group-fitness-31443.html\" target=\"_blank\" title=\"http://www.goldcoast.qld.gov.au/community/active-healthy-group-fitness-31443.html\">www.goldcoast.qld.gov.au…</a> <br><br>\n",
    "content": "Helensvale State School, 8 Linfield Road, Helensvale <br>Saturday, July 29, 2017, 6:30 – 7am <br><br><img src=\"http://www.trumba.com/i/DgDmDL9QPAtRgL6ZoLKBJkpB.jpg\" title=\"Community group fitness\" alt=\"Community group fitness\" width=\"100\" height=\"50\"><br><br>Community group fitness. <br><br><b>Venue</b>: Helensvale State School <br><b>Address</b>: <a href=\"http://maps.google.com/?q=8+Lindfield+Rd%2C+Helensvale+QLD+4212%2C+Australia\" target=\"_blank\">8 Linfield Road, Helensvale</a> <br><b>Suburb</b>: Helensvale <br><b>Bookings required</b>: No <br><b>Category</b>: Group fitness <br><b>Contact name</b>: Mick Kuvx <br><b>Contact phone</b>: 0402 835 627 <br><b>More info</b>: <a href=\"http://www.goldcoast.qld.gov.au/community/active-healthy-group-fitness-31443.html\" target=\"_blank\" title=\"http://www.goldcoast.qld.gov.au/community/active-healthy-group-fitness-31443.html\">www.goldcoast.qld.gov.au…</a> <br><br>\n",
    "enclosure": [],
    "categories": ["http://schemas.google.com/g/2005#event"]
  }, {
    "lat": -27.975961,
    "long": 153.384269,
    "title": "Community group fitness",
    "pubDate": "",
    "link": "http://www.goldcoast.qld.gov.au/community/active-healthy-calendar-41468.html?trumbaEmbed=view%3Devent%26eventid%3D124207562",
    "guid": "http://uid.trumba.com/event/124207562",
    "author": "City of Gold Coast events » Active &amp; Healthy",
    "thumbnail": "",
    "location": "Guardian Angels Primary School, Edmund Rice Drive, Ashmore",
    "time": "6:30 – 7:30am",
    "description": "Guardian Angels Primary School, Edmund Rice Drive, Ashmore <br>Saturday, July 29, 2017, 6:30 – 7:30am <br><br><img src=\"http://www.trumba.com/i/DgDmDL9QPAtRgL6ZoLKBJkpB.jpg\" title=\"Community group fitness\" alt=\"Community group fitness\" width=\"100\" height=\"50\"><br><br>Community group fitness. <br><br><b>Venue</b>: <a href=\"http://www.gaps.qld.edu.au/Pages/default.aspx\" target=\"_blank\">Guardian Angels Primary School</a> <br><b>Address</b>: <a href=\"http://maps.google.com/?q=Edmund+Rice+Dr%2C+Ashmore+QLD+4214%2C+Australia\" target=\"_blank\">Edmund Rice Dr, Ashmore QLD 4214, Australia</a> <br><b>Suburb</b>: Ashmore <br><b>Bookings required</b>: Yes <br><b>Category</b>: Group fitness <br><b>Contact name</b>: Danielle Appi <br><b>Contact phone</b>: 0414 799 957 <br><b>Cost</b>: $15 <br><b>More info</b>: <a href=\"http://www.goldcoast.qld.gov.au/community/active-healthy-group-fitness-31443.html\" target=\"_blank\" title=\"http://www.goldcoast.qld.gov.au/community/active-healthy-group-fitness-31443.html\">www.goldcoast.qld.gov.au…</a> <br><br>\n",
    "content": "Guardian Angels Primary School, Edmund Rice Drive, Ashmore <br>Saturday, July 29, 2017, 6:30 – 7:30am <br><br><img src=\"http://www.trumba.com/i/DgDmDL9QPAtRgL6ZoLKBJkpB.jpg\" title=\"Community group fitness\" alt=\"Community group fitness\" width=\"100\" height=\"50\"><br><br>Community group fitness. <br><br><b>Venue</b>: <a href=\"http://www.gaps.qld.edu.au/Pages/default.aspx\" target=\"_blank\">Guardian Angels Primary School</a> <br><b>Address</b>: <a href=\"http://maps.google.com/?q=Edmund+Rice+Dr%2C+Ashmore+QLD+4214%2C+Australia\" target=\"_blank\">Edmund Rice Dr, Ashmore QLD 4214, Australia</a> <br><b>Suburb</b>: Ashmore <br><b>Bookings required</b>: Yes <br><b>Category</b>: Group fitness <br><b>Contact name</b>: Danielle Appi <br><b>Contact phone</b>: 0414 799 957 <br><b>Cost</b>: $15 <br><b>More info</b>: <a href=\"http://www.goldcoast.qld.gov.au/community/active-healthy-group-fitness-31443.html\" target=\"_blank\" title=\"http://www.goldcoast.qld.gov.au/community/active-healthy-group-fitness-31443.html\">www.goldcoast.qld.gov.au…</a> <br><br>\n",
    "enclosure": [],
    "categories": ["http://schemas.google.com/g/2005#event"]
  }, {
    "lat": -28.130676,
    "long": 153.474369,
    "title": "The Shake Up",
    "pubDate": "",
    "link": "http://www.goldcoast.qld.gov.au/community/active-healthy-calendar-41468.html?trumbaEmbed=view%3Devent%26eventid%3D124206584",
    "guid": "http://uid.trumba.com/event/124206584",
    "author": "City of Gold Coast events » Active &amp; Healthy",
    "thumbnail": "",
    "location": "Palm Beach Currumbin High School, Thrower Drive, Palm Beach",
    "time": "6:30 – 7:30am",
    "description": "Palm Beach Currumbin High School, Thrower Drive, Palm Beach <br>Saturday, July 29, 2017, 6:30 – 7:30am <br><br><img src=\"http://www.trumba.com/i/DgDmDL9QPAtRgL6ZoLKBJkpB.jpg\" title=\"The Shake Up\" alt=\"The Shake Up\" width=\"100\" height=\"50\"><br><br>The Shake UP training delivers challenging, 25 minute workouts suitable for all fitness levels. From those who are new to exercise to the die-hard, fitness fanatics, it's about you performing your best and that is all that matters. <br><br><b>Venue</b>: Palm Beach Currumbin High School <br><b>Address</b>: <a href=\"http://maps.google.com/?q=Thrower+Dr%2C+Palm+Beach+QLD+4221%2C+Australia\" target=\"_blank\">Thrower Drive, Palm Beach</a> <br><b>Suburb</b>: Palm Beach <br><b>Bookings required</b>: Yes <br><b>Category</b>: Group fitness <br><b>Contact name</b>: The Shake Up, Ben O'Connor <br><b>Contact phone</b>: 0414 802 243 <br><b>Cost</b>: $15 <br><b>More info</b>: <a href=\"http://www.goldcoast.qld.gov.au/community/active-healthy-group-fitness-31443.html\" target=\"_blank\" title=\"http://www.goldcoast.qld.gov.au/community/active-healthy-group-fitness-31443.html\">www.goldcoast.qld.gov.au…</a> <br><br>\n",
    "content": "Palm Beach Currumbin High School, Thrower Drive, Palm Beach <br>Saturday, July 29, 2017, 6:30 – 7:30am <br><br><img src=\"http://www.trumba.com/i/DgDmDL9QPAtRgL6ZoLKBJkpB.jpg\" title=\"The Shake Up\" alt=\"The Shake Up\" width=\"100\" height=\"50\"><br><br>The Shake UP training delivers challenging, 25 minute workouts suitable for all fitness levels. From those who are new to exercise to the die-hard, fitness fanatics, it's about you performing your best and that is all that matters. <br><br><b>Venue</b>: Palm Beach Currumbin High School <br><b>Address</b>: <a href=\"http://maps.google.com/?q=Thrower+Dr%2C+Palm+Beach+QLD+4221%2C+Australia\" target=\"_blank\">Thrower Drive, Palm Beach</a> <br><b>Suburb</b>: Palm Beach <br><b>Bookings required</b>: Yes <br><b>Category</b>: Group fitness <br><b>Contact name</b>: The Shake Up, Ben O'Connor <br><b>Contact phone</b>: 0414 802 243 <br><b>Cost</b>: $15 <br><b>More info</b>: <a href=\"http://www.goldcoast.qld.gov.au/community/active-healthy-group-fitness-31443.html\" target=\"_blank\" title=\"http://www.goldcoast.qld.gov.au/community/active-healthy-group-fitness-31443.html\">www.goldcoast.qld.gov.au…</a> <br><br>\n",
    "enclosure": [],
    "categories": ["http://schemas.google.com/g/2005#event"]
  }, {
    "lat": -28.073565,
    "long": 153.376954,
    "title": "The Shake Up",
    "pubDate": "",
    "link": "http://www.goldcoast.qld.gov.au/community/active-healthy-calendar-41468.html?trumbaEmbed=view%3Devent%26eventid%3D124206348",
    "guid": "http://uid.trumba.com/event/124206348",
    "author": "City of Gold Coast events » Active &amp; Healthy",
    "thumbnail": "",
    "location": "Robina High School, 1 Investigator Drive, Robina",
    "time": "6:30 – 7:30am",
    "description": "Robina High School, 1 Investigator Drive, Robina <br>Saturday, July 29, 2017, 6:30 – 7:30am <br><br><img src=\"http://www.trumba.com/i/DgDmDL9QPAtRgL6ZoLKBJkpB.jpg\" title=\"The Shake Up\" alt=\"The Shake Up\" width=\"100\" height=\"50\"><br><br>The Shake UP training delivers challenging, 25 minute workouts suitable for all fitness levels. From those who are new to exercise to the die-hard, fitness fanatics, it's about you performing your best and that is all that matters. <br><br><b>Venue</b>: Robina High School <br><b>Address</b>: <a href=\"http://maps.google.com/?q=1+Investigator+Dr%2C+Robina+QLD+4226%2C+Australia\" target=\"_blank\">1 Investigator Drive, Robina</a> <br><b>Suburb</b>: Robina <br><b>Bookings required</b>: Yes <br><b>Category</b>: Group fitness <br><b>Contact name</b>: The Shake Up, Ben O'Connor <br><b>Contact phone</b>: 0414 802 243 <br><b>Cost</b>: $15 <br><b>More info</b>: <a href=\"http://www.goldcoast.qld.gov.au/community/active-healthy-group-fitness-31443.html\" target=\"_blank\" title=\"http://www.goldcoast.qld.gov.au/community/active-healthy-group-fitness-31443.html\">www.goldcoast.qld.gov.au…</a> <br><br>\n",
    "content": "Robina High School, 1 Investigator Drive, Robina <br>Saturday, July 29, 2017, 6:30 – 7:30am <br><br><img src=\"http://www.trumba.com/i/DgDmDL9QPAtRgL6ZoLKBJkpB.jpg\" title=\"The Shake Up\" alt=\"The Shake Up\" width=\"100\" height=\"50\"><br><br>The Shake UP training delivers challenging, 25 minute workouts suitable for all fitness levels. From those who are new to exercise to the die-hard, fitness fanatics, it's about you performing your best and that is all that matters. <br><br><b>Venue</b>: Robina High School <br><b>Address</b>: <a href=\"http://maps.google.com/?q=1+Investigator+Dr%2C+Robina+QLD+4226%2C+Australia\" target=\"_blank\">1 Investigator Drive, Robina</a> <br><b>Suburb</b>: Robina <br><b>Bookings required</b>: Yes <br><b>Category</b>: Group fitness <br><b>Contact name</b>: The Shake Up, Ben O'Connor <br><b>Contact phone</b>: 0414 802 243 <br><b>Cost</b>: $15 <br><b>More info</b>: <a href=\"http://www.goldcoast.qld.gov.au/community/active-healthy-group-fitness-31443.html\" target=\"_blank\" title=\"http://www.goldcoast.qld.gov.au/community/active-healthy-group-fitness-31443.html\">www.goldcoast.qld.gov.au…</a> <br><br>\n",
    "enclosure": [],
    "categories": ["http://schemas.google.com/g/2005#event"]
  }, {
    "lat": -27.926602,
    "long": 153.315970,
    "title": "The Shake Up",
    "pubDate": "",
    "link": "http://www.goldcoast.qld.gov.au/community/active-healthy-calendar-41468.html?trumbaEmbed=view%3Devent%26eventid%3D124207030",
    "guid": "http://uid.trumba.com/event/124207030",
    "author": "City of Gold Coast events » Active &amp; Healthy",
    "thumbnail": "",
    "location": "Jubilee Primary School, 34 Manra Way, Pacific Pines",
    "time": "6:30 – 7:30am",
    "description": "Jubilee Primary School, 34 Manra Way, Pacific Pines <br>Saturday, July 29, 2017, 6:30 – 7:30am <br><br><img src=\"http://www.trumba.com/i/DgDmDL9QPAtRgL6ZoLKBJkpB.jpg\" title=\"The Shake Up\" alt=\"The Shake Up\" width=\"100\" height=\"50\"><br><br>The Shake UP training delivers challenging, 25 minute workouts suitable for all fitness levels. From those who are new to exercise to the die-hard, fitness fanatics, it's about you performing your best and that is all that matters. <br><br><b>Venue</b>: Jubilee Primary School <br><b>Address</b>: <a href=\"http://maps.google.com/?q=34+Manra+Way%2C+Pacific+Pines+QLD+4211%2C+Australia\" target=\"_blank\">34 Manra Way, Pacific Pines</a> <br><b>Suburb</b>: Pacific Pines <br><b>Bookings required</b>: Yes <br><b>Category</b>: Group fitness <br><b>Contact name</b>: The Shake Up, Ben O'Connor <br><b>Contact phone</b>: 0414 802 243 <br><b>Cost</b>: $15 <br><b>More info</b>: <a href=\"http://www.goldcoast.qld.gov.au/community/active-healthy-group-fitness-31443.html\" target=\"_blank\" title=\"http://www.goldcoast.qld.gov.au/community/active-healthy-group-fitness-31443.html\">www.goldcoast.qld.gov.au…</a> <br><br>\n",
    "content": "Jubilee Primary School, 34 Manra Way, Pacific Pines <br>Saturday, July 29, 2017, 6:30 – 7:30am <br><br><img src=\"http://www.trumba.com/i/DgDmDL9QPAtRgL6ZoLKBJkpB.jpg\" title=\"The Shake Up\" alt=\"The Shake Up\" width=\"100\" height=\"50\"><br><br>The Shake UP training delivers challenging, 25 minute workouts suitable for all fitness levels. From those who are new to exercise to the die-hard, fitness fanatics, it's about you performing your best and that is all that matters. <br><br><b>Venue</b>: Jubilee Primary School <br><b>Address</b>: <a href=\"http://maps.google.com/?q=34+Manra+Way%2C+Pacific+Pines+QLD+4211%2C+Australia\" target=\"_blank\">34 Manra Way, Pacific Pines</a> <br><b>Suburb</b>: Pacific Pines <br><b>Bookings required</b>: Yes <br><b>Category</b>: Group fitness <br><b>Contact name</b>: The Shake Up, Ben O'Connor <br><b>Contact phone</b>: 0414 802 243 <br><b>Cost</b>: $15 <br><b>More info</b>: <a href=\"http://www.goldcoast.qld.gov.au/community/active-healthy-group-fitness-31443.html\" target=\"_blank\" title=\"http://www.goldcoast.qld.gov.au/community/active-healthy-group-fitness-31443.html\">www.goldcoast.qld.gov.au…</a> <br><br>\n",
    "enclosure": [],
    "categories": ["http://schemas.google.com/g/2005#event"]
  }, {
    "lat": -28.077471,
    "long": 153.385015,
    "title": "Heart Foundation group walks",
    "pubDate": "",
    "link": "http://www.goldcoast.qld.gov.au/community/active-healthy-calendar-41468.html?trumbaEmbed=view%3Devent%26eventid%3D124249201",
    "guid": "http://uid.trumba.com/event/124249201",
    "author": "City of Gold Coast events » Active &amp; Healthy",
    "thumbnail": "",
    "location": "Robina Town Centre, Promenade, Robina",
    "time": "6:30 – 7:30am",
    "description": "Saturday, July 29, 2017, 6:30 – 7:30am <br><br><img src=\"http://www.trumba.com/i/DgD36ZDUq9Eg5S-OpBh6nmh7.jpg\" title=\"Heart Foundation group walks\" alt=\"Heart Foundation group walks\" width=\"100\" height=\"50\"><br><br>Walking is a fun and cheap way to keep active and get fit. There are more than 30 free weekly walks offered across our city. Trained volunteers and organisers from the Heart Foundation in partnership with City of Gold Coast also offer walking groups led by local residents. <br><br><b>Venue</b>: Robina Town Centre <br><b>Address</b>: <span>Robina Town Centre, Promenade, Robina</span> <br><b>Suburb</b>: Robina <br><b>Bookings required</b>: No <br><b>Category</b>: Walking <br><b>Contact name</b>: 60 and Better Programs <br><b>Contact phone</b>: 07 5525 6466 <br><b>Cost</b>: Free <br><b>More info</b>: <a href=\"http://www.goldcoast.qld.gov.au/community/active-healthy-walking-31289.html\" target=\"_blank\" title=\"http://www.goldcoast.qld.gov.au/community/active-healthy-walking-31289.html\">www.goldcoast.qld.gov.au…</a> <br><br>\n",
    "content": "Saturday, July 29, 2017, 6:30 – 7:30am <br><br><img src=\"http://www.trumba.com/i/DgD36ZDUq9Eg5S-OpBh6nmh7.jpg\" title=\"Heart Foundation group walks\" alt=\"Heart Foundation group walks\" width=\"100\" height=\"50\"><br><br>Walking is a fun and cheap way to keep active and get fit. There are more than 30 free weekly walks offered across our city. Trained volunteers and organisers from the Heart Foundation in partnership with City of Gold Coast also offer walking groups led by local residents. <br><br><b>Venue</b>: Robina Town Centre <br><b>Address</b>: <span>Robina Town Centre, Promenade, Robina</span> <br><b>Suburb</b>: Robina <br><b>Bookings required</b>: No <br><b>Category</b>: Walking <br><b>Contact name</b>: 60 and Better Programs <br><b>Contact phone</b>: 07 5525 6466 <br><b>Cost</b>: Free <br><b>More info</b>: <a href=\"http://www.goldcoast.qld.gov.au/community/active-healthy-walking-31289.html\" target=\"_blank\" title=\"http://www.goldcoast.qld.gov.au/community/active-healthy-walking-31289.html\">www.goldcoast.qld.gov.au…</a> <br><br>\n",
    "enclosure": [],
    "categories": ["http://schemas.google.com/g/2005#event"]
  }, {
    "lat": -27.989584,
    "long": 153.333773,
    "title": "Deep water running",
    "pubDate": "",
    "link": "http://www.goldcoast.qld.gov.au/community/active-healthy-calendar-41468.html?trumbaEmbed=view%3Devent%26eventid%3D124194211",
    "guid": "http://uid.trumba.com/event/124194211",
    "author": "City of Gold Coast events » Active &amp; Healthy",
    "thumbnail": "",
    "location": "Nerang Aquatic Centre",
    "time": "6:45 – 7:45am",
    "description": "Saturday, July 29, 2017, 6:45 – 7:45am <br><br><img src=\"http://www.trumba.com/i/DgA%2ASIeehHaLqAfy1ncV6Zv7.jpg\" title=\"Deep water running\" alt=\"Deep water running\" width=\"100\" height=\"50\"><br><br>Deep water running class. <br><br><b>Venue</b>: Nerang Aquatic Centre <br><b>Address</b>: <a href=\"http://maps.google.com/?q=34+Martin+St%2C+Nerang+QLD+4211%2C+Australia\" target=\"_blank\">34 Martin Street, Nerang</a> <br><b>Suburb</b>: Nerang <br><b>Bookings required</b>: No <br><b>Category</b>: Aqua classes <br><b>Contact name</b>: Nerang Aquatic Centre <br><b>Contact phone</b>: 07 5575 1976 <br><b>Cost</b>: $11 <br><br>\n",
    "content": "Saturday, July 29, 2017, 6:45 – 7:45am <br><br><img src=\"http://www.trumba.com/i/DgA%2ASIeehHaLqAfy1ncV6Zv7.jpg\" title=\"Deep water running\" alt=\"Deep water running\" width=\"100\" height=\"50\"><br><br>Deep water running class. <br><br><b>Venue</b>: Nerang Aquatic Centre <br><b>Address</b>: <a href=\"http://maps.google.com/?q=34+Martin+St%2C+Nerang+QLD+4211%2C+Australia\" target=\"_blank\">34 Martin Street, Nerang</a> <br><b>Suburb</b>: Nerang <br><b>Bookings required</b>: No <br><b>Category</b>: Aqua classes <br><b>Contact name</b>: Nerang Aquatic Centre <br><b>Contact phone</b>: 07 5575 1976 <br><b>Cost</b>: $11 <br><br>\n",
    "enclosure": [],
    "categories": ["http://schemas.google.com/g/2005#event"]
  }, {
    "lat": -28.026545,
    "long": 153.433564,
    "title": "Active &amp; Healthy Yoga",
    "pubDate": "",
    "link": "http://www.goldcoast.qld.gov.au/community/active-healthy-calendar-41468.html?trumbaEmbed=view%3Devent%26eventid%3D124258923",
    "guid": "http://uid.trumba.com/event/124258923",
    "author": "City of Gold Coast events » Active &amp; Healthy",
    "thumbnail": "",
    "location": "Old Burleigh Rd, Broadbeach QLD",
    "time": "7 – 8am",
    "description": "Saturday, July 29, 2017, 7 – 8am <br><br><img src=\"http://www.trumba.com/i/DgCbQDh-dufJlkPNIC7JQoWq.jpg\" title=\"Active &amp; Healthy Yoga\" alt=\"Active &amp; Healthy Yoga\" width=\"100\" height=\"50\"><br><br>Enjoy these well-balanced and gentle classes in which movements are connected with breath with a strong focus on the mind-body connection. Classes are appropriate for all ages and ability levels. <br><br><b>Venue</b>: <a href=\"http://www.goldcoast.qld.gov.au/thegoldcoast/parks-facilities-140.html\" target=\"_blank\">Kurrawa Park</a> <br><b>Address</b>: <a href=\"http://maps.google.com/?q=Old+Burleigh+Rd%2C+Broadbeach+QLD+4218%2C+Australia\" target=\"_blank\">Old Burleigh Rd, Broadbeach QLD 4218, Australia</a> <br><b>Suburb</b>: Broadbeach <br><b>Bookings required</b>: No <br><b>Category</b>: Yoga <br><b>Contact name</b>: Essence of Living <br><b>Contact phone</b>: 07 5526 6600 <br><b>Cost</b>: $4 <br><b>More info</b>: <a href=\"http://www.goldcoast.qld.gov.au/community/active-healthy-yoga-31327.html\" target=\"_blank\" title=\"http://www.goldcoast.qld.gov.au/community/active-healthy-yoga-31327.html\">www.goldcoast.qld.gov.au…</a> <br><br>\n",
    "content": "Saturday, July 29, 2017, 7 – 8am <br><br><img src=\"http://www.trumba.com/i/DgCbQDh-dufJlkPNIC7JQoWq.jpg\" title=\"Active &amp; Healthy Yoga\" alt=\"Active &amp; Healthy Yoga\" width=\"100\" height=\"50\"><br><br>Enjoy these well-balanced and gentle classes in which movements are connected with breath with a strong focus on the mind-body connection. Classes are appropriate for all ages and ability levels. <br><br><b>Venue</b>: <a href=\"http://www.goldcoast.qld.gov.au/thegoldcoast/parks-facilities-140.html\" target=\"_blank\">Kurrawa Park</a> <br><b>Address</b>: <a href=\"http://maps.google.com/?q=Old+Burleigh+Rd%2C+Broadbeach+QLD+4218%2C+Australia\" target=\"_blank\">Old Burleigh Rd, Broadbeach QLD 4218, Australia</a> <br><b>Suburb</b>: Broadbeach <br><b>Bookings required</b>: No <br><b>Category</b>: Yoga <br><b>Contact name</b>: Essence of Living <br><b>Contact phone</b>: 07 5526 6600 <br><b>Cost</b>: $4 <br><b>More info</b>: <a href=\"http://www.goldcoast.qld.gov.au/community/active-healthy-yoga-31327.html\" target=\"_blank\" title=\"http://www.goldcoast.qld.gov.au/community/active-healthy-yoga-31327.html\">www.goldcoast.qld.gov.au…</a> <br><br>\n",
    "enclosure": [],
    "categories": ["http://schemas.google.com/g/2005#event"]
  }, {
    "lat": -27.918136,
    "long": 153.336871,
    "title": "Community yoga",
    "pubDate": "",
    "link": "http://www.goldcoast.qld.gov.au/community/active-healthy-calendar-41468.html?trumbaEmbed=view%3Devent%26eventid%3D124259240",
    "guid": "http://uid.trumba.com/event/124259240",
    "author": "City of Gold Coast events » Active &amp; Healthy",
    "thumbnail": "",
    "location": "Helensvale Community Centre",
    "time": "7am",
    "description": "Saturday, July 29, 2017, 7am <br><br><img src=\"http://www.trumba.com/i/DgCbQDh-dufJlkPNIC7JQoWq.jpg\" title=\"Community yoga\" alt=\"Community yoga\" width=\"100\" height=\"50\"><br><br>Enjoy these well-balanced and gentle classes in which movements are connected with breath with a strong focus on the mind-body connection. Classes are appropriate for all ages and ability levels. <br><br><b>Venue</b>: Helensvale Community Centre <br><b>Address</b>: <a href=\"http://maps.google.com/?q=31+Discovery+Dr%2C+Helensvale+QLD+4212%2C+Australia\" target=\"_blank\">Helensvale Community Centre, 31 Discovery Drive, Helensvale</a> <br><b>Suburb</b>: Helensvale <br><b>Bookings required</b>: No <br><b>Category</b>: Yoga <br><b>Contact name</b>: Kevala Yoga, Jodie <br><b>Contact phone</b>: 0413 589 347 <br><b>Cost</b>: $17 <br><b>More info</b>: <a href=\"http://www.goldcoast.qld.gov.au/community/active-healthy-yoga-31327.html\" target=\"_blank\" title=\"http://www.goldcoast.qld.gov.au/community/active-healthy-yoga-31327.html\">www.goldcoast.qld.gov.au…</a> <br><br>\n",
    "content": "Saturday, July 29, 2017, 7am <br><br><img src=\"http://www.trumba.com/i/DgCbQDh-dufJlkPNIC7JQoWq.jpg\" title=\"Community yoga\" alt=\"Community yoga\" width=\"100\" height=\"50\"><br><br>Enjoy these well-balanced and gentle classes in which movements are connected with breath with a strong focus on the mind-body connection. Classes are appropriate for all ages and ability levels. <br><br><b>Venue</b>: Helensvale Community Centre <br><b>Address</b>: <a href=\"http://maps.google.com/?q=31+Discovery+Dr%2C+Helensvale+QLD+4212%2C+Australia\" target=\"_blank\">Helensvale Community Centre, 31 Discovery Drive, Helensvale</a> <br><b>Suburb</b>: Helensvale <br><b>Bookings required</b>: No <br><b>Category</b>: Yoga <br><b>Contact name</b>: Kevala Yoga, Jodie <br><b>Contact phone</b>: 0413 589 347 <br><b>Cost</b>: $17 <br><b>More info</b>: <a href=\"http://www.goldcoast.qld.gov.au/community/active-healthy-yoga-31327.html\" target=\"_blank\" title=\"http://www.goldcoast.qld.gov.au/community/active-healthy-yoga-31327.html\">www.goldcoast.qld.gov.au…</a> <br><br>\n",
    "enclosure": [],
    "categories": ["http://schemas.google.com/g/2005#event"]
  }, {
    "lat": -27.766028,
    "long": 153.236614,
    "title": "Community group fitness",
    "pubDate": "",
    "link": "http://www.goldcoast.qld.gov.au/community/active-healthy-calendar-41468.html?trumbaEmbed=view%3Devent%26eventid%3D124206678",
    "guid": "http://uid.trumba.com/event/124206678",
    "author": "City of Gold Coast events » Active &amp; Healthy",
    "thumbnail": "",
    "location": "Ormeau Community Centre, 3 Cuthbert Drive, Ormeau",
    "time": "7 – 8am",
    "description": "Ormeau Community Centre, 3 Cuthbert Drive, Ormeau <br>Saturday, July 29, 2017, 7 – 8am <br><br><img src=\"http://www.trumba.com/i/DgDmDL9QPAtRgL6ZoLKBJkpB.jpg\" title=\"Community group fitness\" alt=\"Community group fitness\" width=\"100\" height=\"50\"><br><br>Group exercise classes are a complete workout and encourage all ability levels to get moving. Conducted by qualified fitness professionals, classes offer a range of fitness activities designed to improve your overall fitness, strength and wellbeing. <br><br><b>Venue</b>: Ormeau Community Centre <br><b>Address</b>: <a href=\"http://maps.google.com/?q=Pascoe+Rd%2C+Ormeau+QLD+4208%2C+Australia\" target=\"_blank\">3 Cuthbert Drive, Corner Pascoe Road, Ormeau</a> <br><b>Suburb</b>: Ormeau <br><b>Bookings required</b>: No <br><b>Category</b>: Group fitness <br><b>Contact name</b>: Lifestyle Inspired Fitness Training, Steph Thomas <br><b>Contact phone</b>: 0404 305 221 <br><b>Cost</b>: $10 <br><b>More info</b>: <a href=\"http://www.goldcoast.qld.gov.au/community/active-healthy-group-fitness-31443.html\" target=\"_blank\" title=\"http://www.goldcoast.qld.gov.au/community/active-healthy-group-fitness-31443.html\">www.goldcoast.qld.gov.au…</a> <br><br>\n",
    "content": "Ormeau Community Centre, 3 Cuthbert Drive, Ormeau <br>Saturday, July 29, 2017, 7 – 8am <br><br><img src=\"http://www.trumba.com/i/DgDmDL9QPAtRgL6ZoLKBJkpB.jpg\" title=\"Community group fitness\" alt=\"Community group fitness\" width=\"100\" height=\"50\"><br><br>Group exercise classes are a complete workout and encourage all ability levels to get moving. Conducted by qualified fitness professionals, classes offer a range of fitness activities designed to improve your overall fitness, strength and wellbeing. <br><br><b>Venue</b>: Ormeau Community Centre <br><b>Address</b>: <a href=\"http://maps.google.com/?q=Pascoe+Rd%2C+Ormeau+QLD+4208%2C+Australia\" target=\"_blank\">3 Cuthbert Drive, Corner Pascoe Road, Ormeau</a> <br><b>Suburb</b>: Ormeau <br><b>Bookings required</b>: No <br><b>Category</b>: Group fitness <br><b>Contact name</b>: Lifestyle Inspired Fitness Training, Steph Thomas <br><b>Contact phone</b>: 0404 305 221 <br><b>Cost</b>: $10 <br><b>More info</b>: <a href=\"http://www.goldcoast.qld.gov.au/community/active-healthy-group-fitness-31443.html\" target=\"_blank\" title=\"http://www.goldcoast.qld.gov.au/community/active-healthy-group-fitness-31443.html\">www.goldcoast.qld.gov.au…</a> <br><br>\n",
    "enclosure": [],
    "categories": ["http://schemas.google.com/g/2005#event"]
  },
    //   {
    //   "title": "Community group fitness",
    //   "pubDate": "",
    //   "link": "http://www.goldcoast.qld.gov.au/community/active-healthy-calendar-41468.html?trumbaEmbed=view%3Devent%26eventid%3D124206631",
    //   "guid": "http://uid.trumba.com/event/124206631",
    //   "author": "City of Gold Coast events » Active &amp; Healthy",
    //   "thumbnail": "",
    //   "location": "Palm Beach Parklands, Gold Coast Highway, Palm Beach",
    //   "time": "7 – 8am",
    //   "description": "Palm Beach Parklands, Gold Coast Highway, Palm Beach <br>Saturday, July 29, 2017, 7 – 8am <br><br><img src=\"http://www.trumba.com/i/DgDmDL9QPAtRgL6ZoLKBJkpB.jpg\" title=\"Community group fitness\" alt=\"Community group fitness\" width=\"100\" height=\"50\"><br><br>Community group fitness. <br><br><b>Venue</b>: Palm Beach Parklands <br><b>Address</b>: <a href=\"http://maps.google.com/?q=Gold+Coast+Hwy%2C+Palm+Beach+QLD+4221%2C+Australia\" target=\"_blank\">Gold Coast Highway, Palm Beach</a> <br><b>Suburb</b>: Palm Beach <br><b>Bookings required</b>: Yes <br><b>Category</b>: Group fitness <br><b>Contact name</b>: Focus Fitness <br><b>Contact phone</b>: 07 5525 1110 <br><b>Cost</b>: $12 <br><b>More info</b>: <a href=\"http://www.goldcoast.qld.gov.au/community/active-healthy-group-fitness-31443.html\" target=\"_blank\" title=\"http://www.goldcoast.qld.gov.au/community/active-healthy-group-fitness-31443.html\">www.goldcoast.qld.gov.au…</a> <br><br>\n",
    //   "content": "Palm Beach Parklands, Gold Coast Highway, Palm Beach <br>Saturday, July 29, 2017, 7 – 8am <br><br><img src=\"http://www.trumba.com/i/DgDmDL9QPAtRgL6ZoLKBJkpB.jpg\" title=\"Community group fitness\" alt=\"Community group fitness\" width=\"100\" height=\"50\"><br><br>Community group fitness. <br><br><b>Venue</b>: Palm Beach Parklands <br><b>Address</b>: <a href=\"http://maps.google.com/?q=Gold+Coast+Hwy%2C+Palm+Beach+QLD+4221%2C+Australia\" target=\"_blank\">Gold Coast Highway, Palm Beach</a> <br><b>Suburb</b>: Palm Beach <br><b>Bookings required</b>: Yes <br><b>Category</b>: Group fitness <br><b>Contact name</b>: Focus Fitness <br><b>Contact phone</b>: 07 5525 1110 <br><b>Cost</b>: $12 <br><b>More info</b>: <a href=\"http://www.goldcoast.qld.gov.au/community/active-healthy-group-fitness-31443.html\" target=\"_blank\" title=\"http://www.goldcoast.qld.gov.au/community/active-healthy-group-fitness-31443.html\">www.goldcoast.qld.gov.au…</a> <br><br>\n",
    //   "enclosure": [],
    //   "categories": ["http://schemas.google.com/g/2005#event"]
    // }, {
    //   "title": "Community group fitness",
    //   "pubDate": "",
    //   "link": "http://www.goldcoast.qld.gov.au/community/active-healthy-calendar-41468.html?trumbaEmbed=view%3Devent%26eventid%3D124206207",
    //   "guid": "http://uid.trumba.com/event/124206207",
    //   "author": "City of Gold Coast events » Active &amp; Healthy",
    //   "thumbnail": "",
    //   "location": "Tallebudgera Leisure Centre",
    //   "time": "7 – 8am",
    //   "description": "Tallebudgera Leisure Centre, 1525 Gold Coast Highway, Palm Beach <br>Saturday, July 29, 2017, 7 – 8am <br><br><img src=\"http://www.trumba.com/i/DgDmDL9QPAtRgL6ZoLKBJkpB.jpg\" title=\"Community group fitness\" alt=\"Community group fitness\" width=\"100\" height=\"50\"><br><br>Community group fitness. <br><br><b>Venue</b>: Tallebudgera Leisure Centre <br><b>Address</b>: <a href=\"http://maps.google.com/?q=1525+Gold+Coast+Hwy%2C+Palm+Beach+QLD+4221%2C+Australia\" target=\"_blank\">1525 Gold Coast Highway, Palm Beach</a> <br><b>Suburb</b>: Palm Beach <br><b>Bookings required</b>: Yes <br><b>Category</b>: Group fitness <br><b>Contact name</b>: The Fit Hub, Chantal <br><b>Contact phone</b>: 0400 107 706 <br><b>Cost</b>: $15 <br><b>More info</b>: <a href=\"http://www.goldcoast.qld.gov.au/community/active-healthy-group-fitness-31443.html\" target=\"_blank\" title=\"http://www.goldcoast.qld.gov.au/community/active-healthy-group-fitness-31443.html\">www.goldcoast.qld.gov.au…</a> <br><br>\n",
    //   "content": "Tallebudgera Leisure Centre, 1525 Gold Coast Highway, Palm Beach <br>Saturday, July 29, 2017, 7 – 8am <br><br><img src=\"http://www.trumba.com/i/DgDmDL9QPAtRgL6ZoLKBJkpB.jpg\" title=\"Community group fitness\" alt=\"Community group fitness\" width=\"100\" height=\"50\"><br><br>Community group fitness. <br><br><b>Venue</b>: Tallebudgera Leisure Centre <br><b>Address</b>: <a href=\"http://maps.google.com/?q=1525+Gold+Coast+Hwy%2C+Palm+Beach+QLD+4221%2C+Australia\" target=\"_blank\">1525 Gold Coast Highway, Palm Beach</a> <br><b>Suburb</b>: Palm Beach <br><b>Bookings required</b>: Yes <br><b>Category</b>: Group fitness <br><b>Contact name</b>: The Fit Hub, Chantal <br><b>Contact phone</b>: 0400 107 706 <br><b>Cost</b>: $15 <br><b>More info</b>: <a href=\"http://www.goldcoast.qld.gov.au/community/active-healthy-group-fitness-31443.html\" target=\"_blank\" title=\"http://www.goldcoast.qld.gov.au/community/active-healthy-group-fitness-31443.html\">www.goldcoast.qld.gov.au…</a> <br><br>\n",
    //   "enclosure": [],
    //   "categories": ["http://schemas.google.com/g/2005#event"]
    // }, {
    //   "title": "Holistic group fitness",
    //   "pubDate": "",
    //   "link": "http://www.goldcoast.qld.gov.au/community/active-healthy-calendar-41468.html?trumbaEmbed=view%3Devent%26eventid%3D124207229",
    //   "guid": "http://uid.trumba.com/event/124207229",
    //   "author": "City of Gold Coast events » Active &amp; Healthy",
    //   "thumbnail": "",
    //   "location": "HPHP Studio, 87 Griffith Street, Coolangatta (downstairs)",
    //   "time": "7 – 8am",
    //   "description": "HPHP Studio, 87 Griffith Street, Coolangatta (downstairs) <br>Saturday, July 29, 2017, 7 – 8am <br><br><img src=\"http://www.trumba.com/i/DgDmDL9QPAtRgL6ZoLKBJkpB.jpg\" title=\"Holistic group fitness\" alt=\"Holistic group fitness\" width=\"100\" height=\"50\"><br><br>These one-hour group fitness classes incorporate a combination of exercises from balance, body expression, movement and stretches to mobilisation, meditation and breathing techniques. <br><br><b>Venue</b>: HPHP Studio <br><b>Address</b>: <a href=\"http://maps.google.com/?q=87+Griffith+St%2C+Coolangatta+QLD+4225%2C+Australia\" target=\"_blank\">87 Griffith Street, Coolangatta</a> <br><b>Suburb</b>: Coolangatta <br><b>Bookings required</b>: Yes <br><b>Category</b>: Group fitness <br><b>Contact name</b>: The Shake Up, Ben O'Connor <br><b>Contact phone</b>: 0414 802 243 <br><b>Cost</b>: $15 <br><b>More info</b>: <a href=\"http://www.goldcoast.qld.gov.au/community/active-healthy-group-fitness-31443.html\" target=\"_blank\" title=\"http://www.goldcoast.qld.gov.au/community/active-healthy-group-fitness-31443.html\">www.goldcoast.qld.gov.au…</a> <br><br>\n",
    //   "content": "HPHP Studio, 87 Griffith Street, Coolangatta (downstairs) <br>Saturday, July 29, 2017, 7 – 8am <br><br><img src=\"http://www.trumba.com/i/DgDmDL9QPAtRgL6ZoLKBJkpB.jpg\" title=\"Holistic group fitness\" alt=\"Holistic group fitness\" width=\"100\" height=\"50\"><br><br>These one-hour group fitness classes incorporate a combination of exercises from balance, body expression, movement and stretches to mobilisation, meditation and breathing techniques. <br><br><b>Venue</b>: HPHP Studio <br><b>Address</b>: <a href=\"http://maps.google.com/?q=87+Griffith+St%2C+Coolangatta+QLD+4225%2C+Australia\" target=\"_blank\">87 Griffith Street, Coolangatta</a> <br><b>Suburb</b>: Coolangatta <br><b>Bookings required</b>: Yes <br><b>Category</b>: Group fitness <br><b>Contact name</b>: The Shake Up, Ben O'Connor <br><b>Contact phone</b>: 0414 802 243 <br><b>Cost</b>: $15 <br><b>More info</b>: <a href=\"http://www.goldcoast.qld.gov.au/community/active-healthy-group-fitness-31443.html\" target=\"_blank\" title=\"http://www.goldcoast.qld.gov.au/community/active-healthy-group-fitness-31443.html\">www.goldcoast.qld.gov.au…</a> <br><br>\n",
    //   "enclosure": [],
    //   "categories": ["http://schemas.google.com/g/2005#event"]
    // }, {
    //   "title": "Community Pilates",
    //   "pubDate": "",
    //   "link": "http://www.goldcoast.qld.gov.au/community/active-healthy-calendar-41468.html?trumbaEmbed=view%3Devent%26eventid%3D124240724",
    //   "guid": "http://uid.trumba.com/event/124240724",
    //   "author": "City of Gold Coast events » Active &amp; Healthy",
    //   "thumbnail": "",
    //   "location": "3/52 Peerless Avenue, Mermaid Beach",
    //   "time": "7 – 8am",
    //   "description": "Saturday, July 29, 2017, 7 – 8am <br><br><img src=\"http://www.trumba.com/i/DgB0TSpatlJt8%2APCQxNvv80E.jpg\" title=\"Community Pilates\" alt=\"Community Pilates\" width=\"100\" height=\"50\"><br><br>Enjoy these mat classes that help improve strength, flexibility and tone. The classes suit all ages and levels including seniors. <br><br><b>Venue</b>: Essence of Living Yoga Studio <br><b>Address</b>: <a href=\"http://maps.google.com/?q=3%2F52+Peerless+Ave%2C+Mermaid+Beach+QLD+4218%2C+Australia\" target=\"_blank\">3/52 Peerless Avenue, Mermaid Beach</a> <br><b>Suburb</b>: Mermaid Beach <br><b>Bookings required</b>: No <br><b>Category</b>: Pilates <br><b>Contact name</b>: Essence of Living <br><b>Contact phone</b>: 07 5526 6600 <br><b>Cost</b>: $13 <br><b>More info</b>: <a href=\"http://www.goldcoast.qld.gov.au/community/active-healthy-pilates-31316.html\" target=\"_blank\" title=\"http://www.goldcoast.qld.gov.au/community/active-healthy-pilates-31316.html\">www.goldcoast.qld.gov.au…</a> <br><br>\n",
    //   "content": "Saturday, July 29, 2017, 7 – 8am <br><br><img src=\"http://www.trumba.com/i/DgB0TSpatlJt8%2APCQxNvv80E.jpg\" title=\"Community Pilates\" alt=\"Community Pilates\" width=\"100\" height=\"50\"><br><br>Enjoy these mat classes that help improve strength, flexibility and tone. The classes suit all ages and levels including seniors. <br><br><b>Venue</b>: Essence of Living Yoga Studio <br><b>Address</b>: <a href=\"http://maps.google.com/?q=3%2F52+Peerless+Ave%2C+Mermaid+Beach+QLD+4218%2C+Australia\" target=\"_blank\">3/52 Peerless Avenue, Mermaid Beach</a> <br><b>Suburb</b>: Mermaid Beach <br><b>Bookings required</b>: No <br><b>Category</b>: Pilates <br><b>Contact name</b>: Essence of Living <br><b>Contact phone</b>: 07 5526 6600 <br><b>Cost</b>: $13 <br><b>More info</b>: <a href=\"http://www.goldcoast.qld.gov.au/community/active-healthy-pilates-31316.html\" target=\"_blank\" title=\"http://www.goldcoast.qld.gov.au/community/active-healthy-pilates-31316.html\">www.goldcoast.qld.gov.au…</a> <br><br>\n",
    //   "enclosure": [],
    //   "categories": ["http://schemas.google.com/g/2005#event"]
    // }
  ]
};