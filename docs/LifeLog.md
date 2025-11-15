# LifeLog

## Name

- LifeLog
- OmniLog

## Features

- Create event from: media, email
- Can combine events
- Record calls
- Audio log
  - Scheduled, rolling, manual
  - Transcript?
  - Timestamped, remove silence
  - Super compressed?
- Journaling
  - Daily, sampled
  - Sampled cam

## Events

- Communication
- Travel, movement
- Media recording
- Media publishing
- Media consumption
- Exercise
- Somatic consumption
- Sleep
- Task creation, execution
- Calendar event: meeting, class, gathering, appointment
- App notifications
- App usage

## Event Attributes

### Time & Location
- Start, end
- Time
- Lat/long, elevation, speed, heading
- Address
- Establishment, room

### Environment
- Temperature
- Day/night %
- Moon
- Weather

### Social
- To, from, cc, bcc, with

### Media & Content
- App, channel
- Content
- URL
- Title, creator
- Subject, topic
- Excerpt, thumbnail
- AI summary

### Commercial
- Cost, earnings, tax
- Receipt, invoice
- Vendor, customer

### Somatic
- Steps, heart rate

### Calendar Details
- Calendar details

### Organization
- Tags, category

## Storage

- Each event is a JSON file (i.e. mongo doc)
- Year/month/day/ folder structure
- Start time of event: `yyyy-mm-dd-hhmm`
- Event tag(s?)
- File extension: `.plog`

### Attributes

- Images/video: VGA thumbnail, link, include

