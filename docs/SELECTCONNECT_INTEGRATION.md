# PopCork × SelectConnect — Social Event Networking

*How SelectConnect powers safe contact sharing at PopCork social events — from party QR codes to post-event follow-up.*

---

## Integration Points

### Event Check-In

PopCork event attendees get a SelectConnect privacy route (5-digit code) tied to the event:
- **Event-scoped**: Code expires when the event ends
- **Context-specific**: Your PopCork social card ≠ your ProMingle professional card
- **Bonded entry** (optional): Event hosts can require a small bond to filter out no-shows

### Social Networking at Events

```
At a PopCork event:
  → Scan someone's QR or enter their 5-digit code
  → See Level 1: First name + interests + "Real human ✓"
  → Post small bond (1-3 ADA) to send a message
  → If mutual interest: bond refunded, connection established
  → If unwanted: decline (bond returned) or report (bond slashed)
```

### Post-Event Follow-Up

- **Mutual QR scans** at the event = pre-unlocked Level 1 after the event
- **Time-limited**: Event connections expire after 7 days unless upgraded to persistent
- **Cross-platform**: PopCork connections can optionally link to ProMingle (professional) or SouLink (dating) profiles via DIDz identity

### HuddleBridge Virtual Events

PopCork virtual events via HuddleBridge use SelectConnect for:
- Speaker → audience networking (bonded follow-up)
- Breakout room contact sharing (event-scoped privacy routes)
- Soulbound participation tokens + SelectConnect reputation = verified event history

---

## Related Documents

- ProMingle Integration: `ProMingle/docs/SELECTCONNECT_INTEGRATION.md`
- SouLink Integration: `SouLink/docs/SELECTCONNECT_INTEGRATION.md`
- SelectConnect Ecosystem Map: `selectConnect/docs/ECOSYSTEM_INTEGRATIONS.md`

---

*Last updated: March 22, 2026 — Penny 🎀*
