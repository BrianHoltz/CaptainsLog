# LifeLog

LifeLog is an app that maintains a log of all the significant events in your life that your smartphone can detect.

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

### Communication
- Phone call (incoming, outgoing, missed)
- Text message (SMS, iMessage, WhatsApp, etc.)
- Email (sent, received, read)
- Video call (FaceTime, Zoom, Teams, etc.)
- Voice message
- Social media message/interaction
- Contact added/updated

### Location & Movement
- Arrival at location (geofence, significant location)
- Departure from location
- Travel start/end
- Transportation mode (driving, walking, cycling, transit, flying)
- Significant location change
- Check-in (Foursquare, etc.)
- Route/track recording

### Media Creation
- Photo taken
- Video recorded
- Audio recorded
- Screen recording
- Screenshot captured
- Document created/edited
- Note/journal entry created

### Media Consumption
- Photo viewed
- Video watched (YouTube, streaming, etc.)
- Audio played (music, podcast, audiobook)
- Book/article read
- App/game played
- Content shared/forwarded

### Media Publishing
- Photo/video posted (social media, blog)
- Content published (blog post, article, video)
- Status update posted
- Review/rating submitted

### Health & Fitness
- Exercise/workout started/completed
- Sleep period (start, end, stages)
- Health measurement (weight, blood pressure, glucose, etc.)
- Medication taken/reminder
- Symptom logged
- Medical appointment
- Health goal achieved

### Consumption
- Food/drink consumed
- Meal logged
- Purchase made (physical, digital)
- Substance consumed (caffeine, alcohol, etc.)
- Water intake

### Financial
- Transaction (purchase, payment, transfer)
- Bill paid
- Income received
- Budget alert/threshold
- Investment activity
- Receipt captured

### Social
- Social media interaction (like, comment, share)
- Friend/follower added
- Event attended (party, gathering, concert)
- Social check-in
- Group activity

### Work & Productivity
- Task created/completed
- Project milestone
- Meeting attended
- Focus/work session started/ended
- Break taken
- Deadline reminder
- App usage session
- Screen time threshold

### Calendar & Scheduling
- Calendar event (meeting, appointment, class)
- Reminder triggered
- Alarm
- Scheduled task due
- Recurring event occurrence

### Learning & Education
- Course/lesson started/completed
- Article/paper read
- Learning session
- Skill practice
- Certification earned
- Quiz/test taken

### Device & System
- Device charged/unplugged
- Battery level threshold
- WiFi/Bluetooth connected/disconnected
- App installed/uninstalled
- System update
- Backup completed
- Storage threshold

### Notifications
- App notification received
- System notification
- Alert triggered
- Reminder notification

### Environmental
- Weather change
- Significant temperature change
- Air quality alert
- Sunrise/sunset
- Moon phase change

### Entertainment & Leisure
- Event attended (movie, show, game, concert)
- Restaurant visited
- Venue visited (museum, park, etc.)
- Hobby activity
- Game played
- Entertainment consumed

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

### Health
- Steps, distance, floors climbed
- Heart rate (resting, active, max)
- Heart rate variability (HRV)
- Blood oxygen (SpO2)
- Respiratory rate
- Body temperature
- Active calories, total calories
- Exercise minutes, active minutes
- Stand hours
- Walking/running pace, cadence
- VO2 max estimate
- Stress level
- Workout type, detection
- Fall detection
- Environmental audio levels (hearing health)
- Mindful minutes

### Calendar Details
- Calendar details

### Organization
- Tags, category

## Storage

- Each event is a JSON file (e.g. mongo doc)?
- Year/month/day/ folder structure
- Start time of event: `yyyy-mm-dd-hhmm`
- Event tag(s?)
- File extension: `.plog`

### Attributes

- Images/video: VGA thumbnail, link, include

## Schema Standards & Interchange Formats

### Relevant Standards

**Schema.org**: Event, Person, Place, Thing schemas align well with LifeLog's event-centric model. JSON-LD serialization provides semantic web compatibility. Activity Streams 2.0 (JSON-LD) covers social activities and interactions.

**Activity Tracking**: GPX (GPS Exchange Format, XML) for location/tracks; FIT (Garmin binary) for fitness metrics; TCX (Training Center XML) for detailed workout data. Consider supporting import/export.

**Calendar**: iCalendar (RFC 5545) is the standard for calendar events. JSON representations exist (jCal, RFC 7265). LifeLog's calendar events should map cleanly.

**Health Data**: ISO/IEEE 11073 Personal Health Data Standards for device interoperability. TSDF (Time Series Data Format) for physiological sensor data.

**Telemetry/Logging**: OpenTelemetry Protocol (OTLP) for structured logging. JSON is de facto standard for log data interchange.

### Observations

**Strengths**: Event-centric JSON design is flexible and aligns with modern practices. Time/location attributes match GPX patterns. Social attributes mirror email/Activity Streams conventions.

**Gaps**: No explicit schema definition (JSON Schema would help). Missing event type taxonomy/ontology. No versioning strategy for schema evolution. Consider adopting schema.org types for better interoperability.

**Recommendations**: 
- Define JSON Schema for validation
- Use ISO 8601 for timestamps (not just `yyyy-mm-dd-hhmm`)
- Consider JSON-LD with @context for semantic meaning
- Support import from GPX/FIT/TCX for activity data
- Align calendar events with iCalendar semantics
- Add schema version field to each event

