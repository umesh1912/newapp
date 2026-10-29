# Real estate agent verification platform

_Started 2026-10-29 08:40 UTC_

---

## User

I want to build the application for real estate agent for the specific region who make deal offline and doing payment offline as well, there is chance to misuse any real estate person - peole go through the one agent and then they deal directly with party, even payment misuse also, and there are running lot's of whatsapp group with the same person and many real estate agent copy other other post by themslevel, so there are many misuse happen so i want to solve for it, make app in english and gujrati.

## Assistant



## User

<system-info comment="Only acknowledge these if relevant">
Project title is now "Real estate agent verification platform"
</system-info>

<pasted_text name="Pasted text (330 lines)">
# Product Requirements Document (PRD): Real Estate Agent Management &amp; Deal Protection Platform

## 1. Product Overview

I want to build a digital platform for real estate agents operating within a specific geographic region, initially targeting Gujarat, India. The platform should help real estate agents manage property listings, connect with other agents, track clients and property visits, protect their business relationships, and maintain transparency throughout the deal lifecycle.

Currently, many real estate agents work through offline networks, phone calls, and WhatsApp groups. Property details, buyer requirements, and business opportunities are frequently shared across multiple groups. This informal process creates several problems, including unauthorized copying of property listings, disputes over commissions, clients bypassing the original agent, payment-related fraud, and a lack of accountability when multiple agents are involved in a transaction.

The goal is to create a trusted, region-specific real estate ecosystem that digitizes these workflows while allowing agents to continue negotiating and completing transactions offline when required.

The application must support **English and Gujarati**, with a simple, mobile-first user experience designed for local real estate agents with different levels of technical knowledge.

## 2. Problem Statement

The current offline real estate business model has several challenges:

- **Agent bypassing:** A buyer or seller is introduced by one agent, but later completes the transaction directly with the other party, leaving the original agent without their agreed commission.
- **Unauthorized listing copying:** Agents copy property details, photos, phone numbers, and descriptions from other agents' WhatsApp messages and repost them as their own listings.
- **Commission disputes:** When multiple agents collaborate on a property deal, there is often no clear record of who introduced the client, who owns the listing relationship, or how the commission should be divided.
- **Payment misuse:** Agents may face delayed payments, disputed commissions, false payment confirmations, or disagreements about the amount owed.
- **Scattered communication:** Property listings and buyer requirements are spread across multiple WhatsApp groups, making them difficult to search, organize, verify, and track.
- **No reliable transaction history:** Verbal agreements and offline discussions often leave no centralized record of introductions, property visits, negotiations, or agreed terms.
- **Duplicate and misleading listings:** The same property may be posted multiple times with different prices, outdated details, or without the original agent's authorization.
- **Limited accountability:** When disputes arise, agents may not have reliable records to establish the sequence of events or the agreed business terms.

## 3. Product Goals

The application should:

1. Protect legitimate agent relationships and property listing ownership.
2. Reduce unauthorized copying and impersonation.
3. Create a transparent record of buyer introductions, property visits, negotiations, and deal progress.
4. Help agents establish and document commission-sharing agreements.
5. Improve payment tracking and reduce commission-related disputes.
6. Provide a trusted network of verified local real estate agents.
7. Replace scattered WhatsApp-based listing management with a searchable, organized platform.
8. Support collaboration between agents without removing their ability to conduct offline business.
9. Build trust through accountability, reporting, verification, and dispute-resolution workflows.

## 4. Target Users

### A. Independent Real Estate Agents
Agents who manage their own properties, buyers, sellers, and commissions.

### B. Property Owners and Sellers
Individuals or businesses who want to list properties and connect with legitimate agents.

### C. Buyers and Tenants
People looking to purchase or rent residential or commercial properties.

### D. Partner and Referral Agents
Agents who share property opportunities, introduce buyers, collaborate on deals, or split commissions.

### E. Agency Owners and Administrators
People who manage multiple agents, monitor transactions, maintain records, and resolve internal disputes.

## 5. Core Features and Functional Requirements

### 5.1 Agent Registration and Verification

- Register using a mobile number and OTP.
- Create a professional profile with name, profile photo, business name, operating region, preferred property categories, and contact information.
- Support optional business, agency, and applicable real estate credential verification.
- Assign a unique agent ID and a verifiable profile.
- Allow agents to build trust through completed transactions, verified references, and platform activity.
- Provide reporting and account restriction mechanisms for fraudulent or abusive activity.

### 5.2 Property Listing Management

Agents should be able to create structured property listings containing:

- Property title and description.
- Property type: residential, commercial, land, industrial, or other.
- Transaction type: sale, rent, lease, or resale.
- Location, locality, landmark, and map location where appropriate.
- Asking price or rental amount.
- Property size, configuration, amenities, and availability.
- Photos, videos, and supporting documents where applicable.
- Listing agent and authorized collaboration agents.
- Commission terms and collaboration conditions.
- Listing status: available, under negotiation, on hold, sold, rented, or inactive.

Each listing should have a unique property ID, creation timestamp, ownership or authorization records, and a history of changes.

### 5.3 Listing Ownership and Anti-Copying Protection

A major product priority is to discourage agents from copying other agents' listings and claiming them as their own.

Required capabilities:

- Automatically assign a unique ID to every listing.
- Display the original listing agent and authorized collaborators.
- Add visible agent attribution and listing reference information to shared property cards.
- Provide branded share cards for WhatsApp and other communication channels.
- Allow agents to share a controlled preview rather than exposing all sensitive information immediately.
- Provide configurable access to phone numbers, exact addresses, photos, and other sensitive details.
- Maintain an audit trail of listing creation, edits, shares, and authorized access where technically possible.
- Detect potential duplicate listings using property details, images, and location.
- Allow the original agent to report unauthorized copies and request review.
- Provide a clear process for resolving listing ownership disputes.

The platform should recognize that a property itself cannot necessarily be owned exclusively by an agent. Protection should focus on verified attribution, authorized representation, documented introductions, and agreed commercial terms.

### 5.4 Buyer and Seller Relationship Protection

The application should maintain a structured record of agent-client introductions.

- Record the buyer or seller associated with a property opportunity.
- Link the introducing agent, property listing, and relevant partner agents.
- Record the date and time of introductions and property visits.
- Generate a digital introduction or property-visit confirmation.
- Allow relevant participants to acknowledge the introduction.
- Record agreed referral fees, commission percentages, or fixed commission amounts.
- Track the validity period and conditions of an introduction agreement.
- Maintain a chronological activity history for the deal.

The system should help establish evidence of introductions and agreed terms, without claiming that a digital record alone guarantees legal ownership of a client relationship or prevents all direct dealings.

### 5.5 Commission and Payment Tracking

The platform should provide a transparent commission-management workflow.

- Define the expected commission amount or percentage for each deal.
- Record the agreed commission split between participating agents.
- Allow all relevant parties to acknowledge the terms.
- Track payment milestones, due dates, outstanding balances, and payment status.
- Support manual recording of offline cash, bank transfers, UPI payments, and other permitted payment methods.
- Allow users to upload receipts or transaction references.
- Distinguish between a payment reported by an agent and a payment independently verified through an authorized integration.
- Send reminders for upcoming and overdue payments.
- Maintain a transaction ledger and downloadable payment history.
- Provide a dispute workflow for incorrect amounts, unpaid commissions, or conflicting payment claims.

The initial version can track and document offline payments without directly processing or holding money. Any future escrow, payment collection, or settlement functionality should be introduced only after the applicable legal, regulatory, and banking requirements are assessed.

### 5.6 Agent Collaboration and Deal Rooms

Agents should be able to collaborate through controlled, property-specific workspaces.

Each deal room should include:

- Property and deal information.
- Participating agents and their roles.
- Buyer or seller introduction records.
- Agreed commission-sharing terms.
- Property-visit history.
- Negotiation updates and milestones.
- Relevant documents and receipts.
- Comments and activity history.
- Deal status and outstanding actions.

Access should be role-based, and sensitive information should only be available to authorized participants.

### 5.7 Regional Property Discovery

The application should support searching and discovering properties within the selected operating region.

- Filter by locality, property type, budget, transaction type, size, and availability.
- Support residential and commercial property categories.
- Search for buyer requirements and property opportunities.
- Allow agents to save listings and create shortlists.
- Show listing freshness and last-updated dates.
- Identify possible duplicate or outdated listings.
- Support expansion into additional cities and regions through configurable geographic settings.

### 5.8 Buyer Requirements and Lead Management

Agents should be able to post or privately record buyer requirements such as:

- Preferred locality.
- Purchase or rental budget.
- Property type and size.
- Required configuration and amenities.
- Purchase or rental timeline.
- Special requirements.

The platform should help match buyer requirements with suitable listings while controlling which contact information is shared and with whom.

### 5.9 WhatsApp Sharing and Notifications

WhatsApp is already a central part of the local real estate workflow, so the product should complement it rather than require agents to abandon it immediately.

- Share branded property cards and listing links.
- Include listing IDs and agent attribution in shared content.
- Allow authorized users to open the full listing in the application.
- Provide notifications for new leads, property visits, agreement acknowledgements, deal updates, and payment reminders.
- Support shareable buyer requirements and collaboration invitations.
- Explore WhatsApp Business integration where suitable and officially supported.

The application should not assume it can control or prevent copying of messages inside external WhatsApp groups.

### 5.10 Trust, Reporting, and Dispute Resolution

- Allow users to report copied listings, impersonation, misleading information, and payment disputes.
- Collect supporting evidence, including relevant records and documents.
- Maintain a timeline of reported incidents and responses.
- Allow authorized administrators to investigate complaints.
- Provide review and appeal workflows.
- Maintain transparent policies for warnings, restrictions, suspensions, and account removal.
- Use evidence-based decisions rather than automatically treating every complaint as proof of misconduct.

### 5.11 English and Gujarati Language Support

The application must support both English and Gujarati from the first release.

- Provide an easy language switch in onboarding and settings.
- Translate navigation, buttons, forms, validation messages, notifications, and system-generated content.
- Support Gujarati Unicode text input and display.
- Ensure that Gujarati typography is readable across mobile devices.
- Support search for Gujarati and English property terms where feasible.
- Allow users to enter property descriptions in either language.
- Use consistent translations for real estate terminology, commission terms, and transaction statuses.

## 6. Suggested Deal Lifecycle

The application should support the following workflow:

1. An agent registers and verifies their profile.
2. The agent creates a property listing or records a buyer requirement.
3. The system generates a unique listing ID and records attribution.
4. Another agent requests access or proposes collaboration.
5. The relevant agents agree on collaboration terms and commission sharing.
6. The agent records a buyer introduction and schedules or confirms a property visit.
7. The deal progresses through negotiation and offer stages.
8. Participants update the agreed transaction terms and payment milestones.
9. The completed deal and commission payments are recorded.
10. The system maintains an auditable transaction history for future reference or dispute resolution.

Agents must also be able to record deals that are negotiated and completed entirely offline.

## 7. Key Screens

The initial application should include the following screens:

1. Language selection: English or Gujarati.
2. Mobile registration and OTP verification.
3. Agent profile and verification status.
4. Dashboard with listings, leads, active deals, and pending payments.
5. Property listing feed and search.
6. Create and edit property listing.
7. Property details with agent attribution.
8. Buyer requirements and lead matching.
9. Agent directory and collaboration requests.
10. Property-specific deal room.
11. Buyer introduction and property-visit records.
12. Commission agreement and payment tracker.
13. Notifications and reminders.
14. Reports, complaints, and dispute management.
15. Transaction history and reports.
16. Profile, privacy, language, and account settings.
17. Admin dashboard for agent verification, listing moderation, and dispute review.

## 8. Non-Functional Requirements

- Mobile-first responsive design for Android, iOS, and web.
- Simple navigation suitable for non-technical users.
- Secure authentication and role-based access control.
- Encryption for sensitive information in transit and at rest.
- Appropriate consent, privacy controls, and retention policies for personal information.
- Reliable audit logs for important actions.
- Fast property search and listing creation.
- Scalable architecture to support multiple regions and growing numbers of agents.
- Accessible interfaces with readable typography and clear status indicators.
- Secure file uploads and controlled access to documents.
- Backup, recovery, and monitoring capabilities.

## 9. MVP Scope

The first version should focus on solving the most frequent and costly problems instead of building every possible real estate feature.

**Priority 1 — Must Have**
- English and Gujarati support.
- Mobile OTP registration and agent profiles.
- Property listing creation with unique IDs and attribution.
- Searchable regional property listings.
- WhatsApp share cards and listing links.
- Buyer introduction and property-visit records.
- Commission-sharing agreements and acknowledgements.
- Offline payment tracking and receipt uploads.
- Deal activity history and notifications.
- Reporting, basic dispute management, and administrator controls.

**Priority 2 — Should Have**
- Duplicate listing detection.
- Buyer requirement matching.
- Advanced collaboration permissions.
- Agent trust indicators and completed-deal history.
- Analytics and commission reports.
- Document management and advanced audit tools.

**Priority 3 — Future Enhancements**
- Verified payment integrations.
- Digital agreement signing.
- Escrow or settlement services, subject to regulatory review.
- AI-assisted listing matching and duplicate detection.
- Advanced fraud-risk indicators.
- Expansion into additional cities and languages.

## 10. Success Metrics

The product's success should be measured through:

- Number of verified agents actively using the platform.
- Number of active, verified property listings.
- Percentage of listings with complete agent attribution.
- Number of documented buyer introductions and property visits.
- Percentage of collaboration deals with acknowledged commission terms.
- Percentage of recorded commissions paid by the agreed due date.
- Reduction in reported duplicate listings and unresolved disputes.
- Monthly active agents and repeat usage.
- Number of deals successfully tracked from introduction to completion.
- Adoption and usage of the Gujarati interface.

## 11. Product Principles

- Trust and transparency should be the foundation of the platform.
- Agents should receive clear credit for their contributions.
- Sensitive client and property information should be protected.
- Agreements and payments should have a clear, documented history.
- The platform should support existing offline business practices rather than force an entirely new way of working.
- Dispute handling should be fair to all parties.
- The application should be simple, practical, and designed specifically for the realities of regional real estate markets.

## 12. Final Product Vision

Build a trusted digital network for regional real estate agents that brings property listings, agent attribution, client introductions, collaboration agreements, deal tracking, and commission records into one secure platform.

The primary objective is not simply to create another property listing application. It is to solve the trust and accountability problems that occur when agents work through informal networks, share information across WhatsApp groups, and complete transactions offline.

The platform should help honest agents protect their business relationships, reduce misunderstandings and misuse, collaborate confidently, and maintain clear records from the first introduction to the final payment.
</pasted_text>

<!-- The user explicitly selected the following skills for this project, as attachments to their message. These are not optional context — they define how you work. Use them. -->
<attached-skill name="Ramsell Design System (design system)">
[Design System] This project uses the **Ramsell Design System** design system. This is a binding choice for visual style — every visual must follow it. Don't invent colors, type, spacing, or components not grounded here.

Scope: the design system is a visual style reference only. Its guide may describe example products, brands, or people that are unrelated to the user and unrelated to the subject of this conversation. Never treat anything in the design system as a fact about the user, their work, or the topic they asked about.

    Explore it to find what you need:
    - Always copy out the fonts and colors you need
    - For prototypes and designs, always copy out any relevant components
    - If the design system contains existing mocks of products, and you were asked to design or prototype something similar, copy and fork those mocks to start your design. This helps you make high-quality designs.

    Explore it quickly to find relevant UI kits (e.g. mocks of existing products you can copy and fork)

Full system at `/projects/27acc41f-959d-4f64-a326-9095cb9b56e4/`. Its guide is reproduced below so you don't need to fetch it:

<design-system-guide>
# Ramsell Design System

Design system for **Ramsell Corporation** — a pharmacy-benefit / public-health program administrator whose product family is shown in the file as **Ramsell PBM, MTM, 340B, ADAP, Corrections** and the **Ramsell Admin Portal**. The UI layer is built on **Telerik &amp; Kendo UI** components (re-themed in Ramsell deep red) with **Tailwind CSS** base styles, per the file's cover slide ("Telerik &amp; KENDO — Enterprise-grade UI components and developer tools"; "Tailwind CSS — Utility-first styling…").

## Sources
- Figma: **"Telerik &amp; KENDO - Ramsell.fig"** (attached as a file; no URL provided). Pages: Cover, Branding, Getting-Started, Change-Log, Styles (color swatches, palettes, effects, elevation, typography), Icons (19 category frames, ~840 glyphs), 40+ component pages (Buttons … Wizard), Charts, Tailwind-Base-Styles, Custom-Components (Ramsell shell).
- No codebase, no slide decks were provided.

## Index
- `styles.css` — global entry (imports only).
- `tokens/fig-tokens.css` — all 1,235 Figma variables (6 collections; light :root, `[data-theme="dark"]`, `[data-mode="ocean-blue"]`). Unitless floats → use `calc(var(--x) * 1px)`.
- `tokens/semantic.css` — Ramsell primary pin, semantic aliases (`--text-body`, `--surface-card`…), `--kendo-elevation-1…5`.
- `tokens/fonts.css` — Inter / Roboto / Roboto Slab via Google Fonts.
- `tokens/fig-typography.css` — empty: the file defines **0 text styles** (type lives in variables).
- `components/kendo/` — Kendo UI component families materialized from Figma (+ hand-authored `Button`).
- `components/ramsell/` — Ramsell custom shell components.
- `components/icons/` — `&lt;Icon name size /&gt;` + `glyphs.js` (816 Kendo glyphs).
- `cards/`, `guidelines/` — Design System tab specimen cards.
- `ui_kits/admin-portal/` — click-through Admin Portal recreation.
- `assets/logos/`, `assets/imagery/` — real PNG logos and cover imagery copied from Figma.
- `SKILL.md` — Agent-skill entry point.

## CONTENT FUNDAMENTALS
- **Voice:** plain, administrative, second-person-free descriptions. Page subtitles describe what the page does: *"View and manage every organization in the Ramsell system."* App switcher: *"Navigate to your application seamlessly without having to log in again."*
- **Casing:** Title Case for navigation and page titles (*Dashboard, User Management, Platform Configuration, Reporting &amp; Analytics, Audit &amp; Compliance, Eligibility &amp; Enrollment*). Sentence case for helper text (*"Across all organizations"*). Ampersands are used instead of "and" in nav labels.
- **Counts &amp; metrics:** bare numerals with a lowercase noun — *"128 organizations"*, summary card *"Total Users / 128 / Across all organizations"*.
- **Labels:** short nouns on buttons (*Button, Switch, Settings, Save*). Tech acronyms kept upper-case (*APIs, EDI, sFTP, HL7 / FHIR*).
- **Legal/footer:** *"Privacy Policy | Terms of Use"*, *"©2026 Ramsell Corp. All rights reserved."*, sidebar footer *"Powered by:"* + Ramsell logo.
- **Emoji:** not used in product UI. Unicode only for the pipe separator and ©.
- **Vibe:** enterprise healthcare admin — calm, dense, factual; no marketing exclamations.

## VISUAL FOUNDATIONS
- **Color.** Primary is Ramsell **deep red rgb(121,0,9)** (`--primary-light-9`), hover rgb(104,0,8), active rgb(81,0,7); subtle tints rgb(252,236,238)/rgb(249,218,221). Text is never pure black: body rgb(61,61,61), subtle rgb(102,102,102). Surfaces: white app surface, rgb(250,250,250) surface, rgb(245,245,245) base buttons; borders rgba(0,0,0,.08) / .16. Each product has its own 5-step ramp — 340B red rgb(215,25,32), ADAP orange rgb(247,148,29), MTM blue rgb(0,161,228), PBM green rgb(141,198,63) — used only in product lockups and app-switcher tiles. The multi-color cross mark combines them. Status: success rgb(45,150,0)-family, warning rgb(255,192,0), error rgb(202,20,0), info rgb(0,88,233).
- **Type.** Inter is the system face (`--kendo-font-family`) for shell, headings and copy; Roboto 14/20 renders Kendo component text (buttons, inputs, grid cells); Roboto Light for display numerals; Menlo for code. Scale: xs 10, sm 12, md 14, lg 16, xl 20; h1–h6 56/42/35/28/21/14; display 112/98/84/70. Line heights 1 / 1.25 / 1.42 / 1.5.
- **Spacing.** 4px base with half steps (`--kendo-spacing-0-5`=2 … `-30`=192). Components: md control padding 4px 8px, gap 4; sm 2px 8px; lg 8px 8px; grid cells 8px 12px; cards 16; page gutter 24.
- **Radii.** Small and consistent: 4px for controls/cards (md), 2px sm, 6px lg, full pills for badges/chips. Cover slide panels go large (36 / 28 / 24 / 20) — presentation only.
- **Borders vs shadows.** Controls use a 1px inset border (rgba(0,0,0,.08) base, theme color when solid). Shadows follow the Elevation System: 1 = 0 2 3 .04; 2–5 = 0 4 16 .12 plus a second layer (popup/AppBar/Window = elevation 4; focused window/ActionSheet = 5).
- **Cards.** White, 1px rgba(0,0,0,.08) border, 4–8px radius, light elevation; summary cards 271×134 with label / big numeral / caption.
- **States.** Hover darkens solid fills one ramp step (or 8% theme tint for flat); active = 16% tint / next step; selected rows rgba(121,0,9,.25); focus = 4px soft ring of the theme color at ~25%; disabled = 60% opacity.
- **Backgrounds &amp; imagery.** Product UI is flat white/grey — no gradients, textures or photos. The only "hero" treatment is the cover slide: solid red rgb(188,49,39) with translucent white glass panels (7% fill, 14% inset hairline). Imagery is the logo mark itself.
- **Motion.** Not specified in the file; keep to Kendo defaults (short ~150ms color fades, no bounces).
- **Transparency/blur.** Only on the cover (white 5–8% panels). Tailwind-base page lists blur tokens but they are not used in product screens.
- **Layout.** 1440 desktop frame: fixed 260px left nav (collapsible to 80px), 72px top header, 24px content padding, 56px footer. Tablet header variants exist.
- **Dark mode / themes.** Variables include a Main Dark mode and an "Ocean Blue" mode (`data-theme="dark"`, `data-mode="ocean-blue"`).

## ICONOGRAPHY
- The file ships the full **Kendo UI SVG icon set** (Icons page, 19 category frames: actions, arrows, charts, editing, files-and-folders, media, navigation, social, toggle, …) — 16×16 grid, single-color filled glyphs painted in rgb(61,61,61).
- Materialized as `components/icons/glyphs.js` (816 entries) with `&lt;Icon name="ArrowChevronDown" size={16} /&gt;`; glyphs use currentColor. Names are PascalCase of the Figma kebab names (e.g. `more-vertical` → `MoreVertical`).
- Common in the Ramsell shell: DashboardSolid, BuildingsOutline, UsersOutline, Gear, Notification, Logout, ArrowChevronDown/Right, Grid (app switcher).
- No icon font, no emoji, no unicode icons. Mac cursor glyphs exist as `BaseMacCursors` for documentation only.

## Brand assets
`assets/logos/`: ramsell-logo-color / ramsell-logo-white, ramsell-wordmark-{black,grey,white}, ramsell-mark-{black,grey,white,color}, product lockups ramsell-{pbm,mtm,340b,corrections}. `assets/imagery/`: cover-hero (stacked mark), badge-telerik, badge-tailwind. All are PNG exports from the Figma Branding/Cover pages — never redraw them.

## Intentional additions
- `Icon` — wrapper for the glyph data set (the file defines icons as ~840 separate components).
- `Button` was hand-authored: the Figma set has 1,296 variants (beyond the extractor's cap), so a parametric component was written from the file's exact values.
- `tokens/semantic.css` aliases and `--kendo-elevation-*` (values transcribed from the Elevation System page).

## Components
### Kendo (components/kendo)
AIMessageBubble, AIPrompt, ActionSheet, ActionSheetItem, ActionSheetTitleBar, AppBar, ArcGauge, ArcGaugeLabel, Area, Arrow60Down, Arrow60Down2, Arrow60Left, Arrow60Right, Arrow60Up, ArrowChevronDown, ArrowChevronLeft, ArrowChevronRight, ArrowChevronUp, Attachment, AttachmentsInTextAreaPrefix, Author, AutoComplete, Avatar, Avatar2, Axis, AxisLabel, AxisPolar, AxisRadar, Badge, Bar, Bar2, Bar3, BarChart, BarClustered, BaseActionSheetItem, BaseActionSheetTitleBar, BaseAppBar, BaseAttachment, BaseAvatar, BaseBadge, BaseBarChart, BaseBodyCenturyView, BaseBodyDecadeView, BaseBodyWeek, BaseBodyYearView, BaseBottomNavigationItem, BaseBreadcrumbItem, BaseBubble, BaseButton, BaseButtonGroupButtons, BaseButtonLabel, BaseButtonMoreEvents, BaseCalendarHeader, BaseCalendarNavigation, BaseCardBody, BaseCardFooter, BaseCardHeader, BaseCheckbox, BaseChip, BaseColorPaletteTile, BaseColumnMenu, BaseComboBox, BaseComponentsTitle, BaseDateInput, BaseDateText, BaseDrawAreaContent, BaseDrawerItem, BaseDropDownList, BaseDropZone, BaseEventCell, BaseEventCloseButton, BaseExpansionPanel, BaseFigmaHeader, BaseFilterCell, BaseFilterListItem, BaseFloatingActionButton, BaseGridCell, BaseGridHeaderCell, BaseGridToolbar, BaseGroupingFooter, BaseGroupingRow, BaseGroupingToolbar, BaseHeatmapTileSquare, BaseHintTextAndCharacter, BaseInput, BaseInputButton, BaseInputHintText, BaseInputLabel, BaseLabelPosition, BaseListItem, BaseListviewItem, BaseLoader, BaseLoader2, BaseMacCursors, BaseMenuItem, BaseMenuLink, BaseMessageBubble, BaseMonthYearDecadeHeader, BaseMonthYearDecadeText, BaseMultiSelect, BaseNavigationColumn, BaseNavigationContent, BaseNavigationItem, BaseNotification, BaseNumeric, BasePagerItem, BasePanelBarChildItem, BasePanelBarRootItem, BasePivotGridCell, BasePivotGridHeaderCell, BasePlaceholder, BaseQuickReply, BaseRadioButton, BaseSchedulerCell, BaseSelectionCell, BaseSliderHandle, BaseSpreadsheetCell, BaseStepIndicator, BaseStepLabel, BaseSuggestionLink, BaseTabItem, BaseTaskboardCard, BaseTextArea, BaseTimeDurationInput, BaseTimeDurationPickerHeader, BaseTimePickerHeader, BaseTooltip, BaseTreeListItem, BaseTreeViewItem, BaseUploadFileS, BaseWeekDays, BottomNavigation, BottomNavigationItem, BoxPlot, Breadcrumb, BreadcrumbItem, BreadcrumbPanel, Bubble, BubbleChart, BubbleLayer, Bullet, Button, ButtonGroup, ButtonGroupButtons, ButtonMoreEvents, Calendar, CalendarBody, CalendarCell, CalendarHeader, Cancel, Captcha, Card, CardBody, CardFooter, CardHeader, CardSkeleton, Cart, ChartCircle, ChartLegendLabel, ChartTypeListItem, Chat, Check, Checkbox, CheckboxGroup, ChildItem, ChildTreeViewItem, Chip, ChipListMultipleSelect, ChipListSingleSelect, ChunkProgressBar, ChunkProgressBarButton, Circle, Circle2, CircleGauge, ClearButton, Close, CloseCircle, ColorGradient, ColorGradientCanvas, ColorGradientColorMode, ColorGradientHandles, ColorPalettePresets, ColorPaletteTile, ColorPickerDropdown, ColorPickerExpanded, ColumnHeader, ColumnHeaderCell, ComboBox, ComboboxContextMenu, ConfigurationItem, ConfiguratorButton, Connectors, ControlButtons, DateInput, DatePicker, DateRangePicker, DateRangePickerInput, DateRangePickerView, DateTimePicker, DateTimePickerExpanded, DateTimePickerView, DeleteGroupButton, Diagram, DiagramToolbar, Dialog, DialogBar, DockManager, DockManagerButton, DockManagerNavigator, DockManagerPane, DockManagerToolbar, DonutChart, DragAndDrop, Drawer, DrawerItem, DropDownButton, DropDownButton2, DropDownList, DropDownTree, DropDownTreeFiltering, Edit, EditPane, Editor, EditorTextAria, EditorToolbar, Email, Error, ErrorBar, EventCell, EventCloseButton, ExpandedMultiColumnComboBox, ExpansionPanel, ExpansionPanelGroup, ExternalDropZone, Extremum, FigmaSeparator, FileDetails, FileImage, FileManager, FileManagerListViewItem, FileManagerToolbar, FilePdf, Filter, FilterCell, FilterGroup, FilterListItem, FilterMenu, FilterRow, FlatColorPicker, FlatColorPickerColorPreview, FlatColorPickerFooter, FlatColorPickerHeader, FlatColorPickerRevertButton, FloatingActionButtonCollapsed, FloatingActionButtonExpanded, FloatingActionButtonSpeedDialItem, FloatingLabel, Folder, ForegroundColor, Form, FormButtons, FormField, FormLegend, FormSeparator, FormulaFx2, Funnel, GanttTaskItemDependancyDot, GanttTaskItemDependencyDot, GanttTaskItemDropHint, GanttTaskItemMilestone, GanttTaskItemPlannedTask, GanttTaskItemReorderPreview, GanttTaskItemTask, GanttTaskItemTaskSummary, GanttToolbar, GanttWeekView, Gear, GlobeOutline, Grid, GridCell, GridColumn, GridColumnMenu, GridPager, GridRow, GridToolbar, GroupSortIcon, GroupingComboBox, GroupingRow, GroupingRowIcon, GroupingToolbar, HeaderCell, HeaderRow, Heatmap, Hint, HyperlinkOpen2, Image, ImageEditor, ImageEditorPane, ImageEditorToolbar, Inbox, Input, InsertMiddle, Label, Label3, LineChart, LinearGauge, Link, List, ListBox, ListGroupItem, ListItem, ListView, ListViewContent, ListViewFooter, ListViewHeader, ListViewItem, ListWithFiltering, Loader, LoaderContainer, LocationPin, Map, MarkerPinTarget, MaskedTextBox, MediaPlayer, MediaPlayerTitlebar, MediaPlayerToolbar, Menu, MenuItem, MenuLink, MenuPopup, Message, MessageActionsToolbar, MessageBox, MessageBubble, MessageContent, MessageList, MessageTime, MetricsLabel, MoreHorizontal, MoreVertical, MultiColumnComboBox, MultiSelect, MultiSelectTree, MultiViewCalendar, MultiViewCalendarHeader, Navigation, NavigationArrows, NavigationColumn, NavigationContent, NavigationItem, Navigator, NavigatorButton, NoRecordRow, Notification, NumericTextBox, OTPInput, OTPInputField, OTPInputSeparator, OrgChart, OrgChartColumn, OrgChartItem, OrgChartRow, Outlier, OverflowButton, PDFViewer, PDFViewerToolbar, PageSize, Pager, PagerItem, PagerNavButton, Pages, Paint, PanelBar, Paste, Path, PauseOverlay, PieChart, PinOutline, PinningToolbar, PivotGrid, PivotGridCell, PivotGridColumnMenu, PivotGridConfigurator, PivotGridWithPushPanel, Plus, Pointer, PolarChart, Popover, PopoverBody, PopoverFooter, PopoverHeader, Popup, PopupList, ProgressBar, ProgressBar2, ProgressStatus, PromptBox, PropertyGrid, QuickReplyAndSuggestions, RadarChart, RadialGauge, RadioButton, RadioGroup, RangeAreaSingleSeries, RangeBar, Rating, RatingItem, RatingItem16Disabled, RatingItem16DisabledHalf, RatingItem16DisabledSelected, RatingItem16HalfPrecision, RatingItem16Normal, RatingItem16Selected2, RatingItem24Disabled, RatingItem24DisabledHalf, RatingItem24DisabledSelected, RatingItem24HalfPrecision, RatingItem24Normal, RatingItem24Selected, Rectangle, Redo, Reply, Reset, ResponsiveToolbar, RootItem, RootTreeViewItem, RowHeaderCell, SankeyDiagram, ScatterChart, Scheduler, SchedulerCell, SchedulerFooterToolbar, SchedulerToolbar, SchematicButton, SchematicComponent, SchematicDropDownList, SchematicFloatingActionButton, SchematicRadioButton, SchematicTextBox, ScrollView, SearchDialog, Segment, SegmentedControl, Selection, Selection2, Selection3, Shapes, Signature, Slider, SliderButton, SliderHandle, SmartBox, SmartPasteButton, SortAscSm, SortDescSm, SortIcon, Sparkles, Sparkles2, Sparkline, SpeechToTextButton, SpeechToTextButtonStates, SpinButton, Split, SplitButton, Splitbar, Splitter, Spreadsheet, SpreadsheetCell, SpreadsheetColumn, SpreadsheetRow, Star, Star2, Star4, StarOutline, StarOutline2, Status, Step, StepIndicator, StepLabel, Stepper, StockChart, SuggestionLink, Switch, TabItem, TabStrip, TaskBoard, TaskBoardCard, TaskBoardColumn, TaskConnector, Text, TextArea, TextAreaFeatures, Tick, Tile, TileLayoutCard, TileLayoutGrid, TileSquareSteps, TileSquareVariants, TimeDurationPicker, TimeDurationPickerPopup, TimePicker, TimePickerPopup, TimeStamp, Timeline, Timeline2, TimelineCard, TimelineCircle, TimelineDate, TimelineFlag, TitleText, Toolbar, Tooltip, TotalPivotGridCell, Track, TreeList, TreeMap, TreeView, TypingArea, Upload, Upload2, UploadFileS, User, User2, ValueAndRanges, VerificationMessage, ViewBox, Warning, WarningTriangle, WaterfallChart, Window, Window2, WindowBar, Wizard, WizardSteps, WorkflowDiagram, ZoomControl, ZoomOptions, ArrowChevronDown2, ArrowChevronUp2, SchematicPanelBar

### Ramsell custom (components/ramsell)
AppSwitcher, Branding, BuildingsOutline, CalendarDate, CheckCircle, DashboardSolid, DashboardSummaryCard, FileAdd, FileAscx, Footer, Grid2, Header, InformationSolid, IntegrationsMenu2, IntegrationsMenuIntegrationsMenu, LeftNavigation, LineStackedMarkers, LogoBrand, Logout, NavigationButton, Notification2, OrganizationMenu2, OrganizationMenuOrganizationMenu, PageHeading, Parameters, PlatformConfiguration, PlatformConfigurationMenuPlatformConfigu, ProfileMenu, ProgramsMenu2, ProgramsMenuProgramsMenu, ProgramsMenuVariant3, SecurityCheckSolid, SubIntegrationsMenu, SubOrganizationMenu, SubPlatformConfigurationsMenu, SubProgramsMenu, SubUserManagementMenu, TopHeader, UserManagementMenu2, UserManagementMenuUserManagement, UsersOutline

### Icons (components/icons)
Icon

## Known gaps
- Materialized components are high-fidelity *snapshots* of Figma variants: props select variants; most text is exposed as `text1…text4`; large sets (&gt;64 variants) keep only a subset of variant deltas.
- Several Figma families share names (4 "Button" sets, 2 "Avatar", 2 "Checkbox", 3 "_Base Button", 2 "_Base Loader"…); one of each name is built.
- Font binaries are not in the file; Inter/Roboto load from Google Fonts. Segoe UI and Menlo fall back to system faces.

</design-system-guide>

CSS tokens: the guide may describe tokens in prose, but the exact `--*` names are defined in the design system's stylesheet(s). Before writing any `var(--*)`, look up the real name in the design system's `.css` files (`list_files` + `read_file` under `/projects/27acc41f-959d-4f64-a326-9095cb9b56e4/`). Never guess a token name — an unresolved `var()` silently falls back to the browser default.

For assets and UI kits beyond the guide: `read_file("/projects/27acc41f-959d-4f64-a326-9095cb9b56e4/<path>")` and `copy_files` to bring them into the current project.
</attached-skill>

## Assistant



## Assistant

_[tool: ask_user]_

I need your answers on scope before building: platform, which flows to make clickable first, product name, launch city, default language and Gujarati font. Submit the form or skip it, and I'll fill in anything you leave blank.

## User

<artifact-content-authored-by-others/>
Answered — platform: Both: mobile agent app + web admin; flows: Language + OTP onboarding, Dashboard, Listing feed & search, Create listing, Property detail + attribution, WhatsApp share card, Buyer introduction / visit record, Deal room, Commission & payment tra…; name: DalalSetu; city: Surat; lang_default: Gujarati; gujarati_font: Noto Sans Gujarati (pairs with Inter); variations: One polished prototype; tone: Friendly & local

## Assistant

_[tool: list_files]_

_[tool: read_file]_

_[tool: list_files]_

_[tool: list_files]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: run_script]_

_[tool: copy_files]_

_[tool: run_script]_

_[tool: delete_file]_

_[tool: grep]_

_[tool: grep]_

_[tool: grep]_

_[tool: read_file]_

_[tool: grep]_

_[tool: grep]_

_[tool: write_file]_

_[tool: update_todos]_

_[tool: dc_write]_

_[tool: dc_write]_

_[tool: dc_write]_

_[tool: write_file]_

_[tool: dc_write]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

Now detail, create, created.

_[tool: dc_html_str_replace]_

Visit, visitDone, deals, deal room.

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: show_html]_

_[tool: get_webview_logs]_

_[tool: multi_screenshot]_

_[tool: save_screenshot]_

_[tool: show_html]_

_[tool: get_webview_logs]_

_[tool: write_file]_

_[tool: show_html]_

Rendering. Quick check of key screens.

_[tool: multi_screenshot]_

_[tool: run_script]_

_[tool: dc_write]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: update_todos]_

_[tool: show_html]_

_[tool: get_webview_logs]_

_[tool: ready_for_verification]_

I've built DalalSetu as two clickable prototypes, both in the Ramsell design system with Surat sample data.

**Agent app** (`DalalSetu Agent App`, in a phone frame): it opens in Gujarati, and an ગુ/EN switch in the top bar changes the whole app at any point. A panel beside the phone jumps straight to any of 16 screens:
- **Sign-in:** language choice, mobile number and OTP.
- **Listings:** dashboard, search with filters, and property detail. Each property page shows who listed it, a unique listing ID, a change history and a warning when it may be a copy. The owner's phone and exact address stay hidden until the listing agent approves.
- **WhatsApp share card:** carries the listing ID and the agent's name. It never includes the owner's phone or address, and you can toggle what else it shows.
- **New listing (3 steps):** commission split, who can see what, and a confirmation that the owner gave permission.
- **Buyer visit:** records the introduction, and the buyer confirms it by SMS OTP.
- **Deal room:** shows the deal's stage, the agreed commission terms and payment milestones. When a token payment is reported, you can confirm or dispute it.
- **Payments:** a record of offline payments. Each entry shows whether one side reported it or both sides confirmed it, and there's a reminder button for overdue amounts.
- **Reports:** filing a report automatically attaches the platform's records as evidence.

**Admin console** (`DalalSetu Admin`, desktop): screens for agent verification, comparing a copied listing against the original, and deciding disputes. Its actions update their status as you click.

The admin console is English-only for now. All photos are grey placeholders, and the logo is a stand-in until you have a real one. I wrote the Gujarati translations myself, so a native speaker should check the real estate and commission terms before this goes in front of agents.

## User

Found issues — fixing…

## Assistant

_[tool: dc_js_str_replace]_

_[tool: ready_for_verification]_

The agent app no longer throws an error each time you tap something, and it now jumps back to the top when you move to a new screen. The page reloads with no errors; I haven't re-run the full check after this fix.

