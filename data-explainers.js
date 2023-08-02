export const EXPLAINERS = {
'Project Name':'This is the name of the project.',
'Project Id':'This is our internal ID for the project, you\'ll notice it in the URLs when viewing a project specific view.',
'Project Uses Environments?':'Does the project have events coming in for more than 1 environment? If not, it\'s likely this project is missing out on segmentation functionality that allows users to easily separate errors coming from different environments (e.g. development vs production, or other special build environments).',
'Project has minified Stacktraces?':'If the project has minified stacktraces this means they either did not upload their sourcemaps(for JS)/Debug files(for Mobile), or they\'re not working as expected. This results in significantly less useful issues in Sentry (usually an inidicator of a project whose users don\'t actually use Sentry), and worse issue grouping.',
'Sdk version to upgrade':'If the SDK version is a major version apart (e.g. V6.x.x of Javascript vs V7.x.x), the project is likely missing out on many new features and improvements, such as access to Session Replay(JS Sdk), Profiling(Mobile and Back-End SDKs), and many significant improvements to the experience. Ask your SE to check what the major features/improvements they\'re missing out on are.',
'Issue Workflow is used? (Issues get Resolved)':'If the Issue workflow is not used, this means the project is not able to detect regressions across releases, a key part of Sentry\'s platform. You can suggest turning on auto-resolve in their project settings as an easy solution to this. ',
'% Of issues that are assigned':'If issues are not being assigned then the project is missing out on the opportunity to save 30-45 minutes in triaging to the appropriate developer &/or team, link to Nextdoor blog post on how they save 30-45 minutes per issue.',
'Ownership Rules are set':'Setting Ownership Rules allows for automatic assignment of issues based on preset rules. If the org has a SCM Integration (See Below) They may even be able to simply import their CODEOWNERS file into Sentry.',
'Sessions are being sent?':'You aren\’t leveraging Sentry\’s release support to the fullest by collecting session data. Track & alert on crash free session rate.',
'Releases are being created?':'If Releases aren\'t being created then Sentry\'s Release Health functionality is not used. This means the org can\'t track issues regressing across releases, they can\'t track if a new release caused a spike in errors/a worse user experience and auto-revert back, and much more.',
'Performance is used in this project?':'Does the organization use Sentry\'s Performance Monitoring Offering? If not, they\'re missing out on a tonne of insights around their User\'s Experience! This could be an opportunity to explore, check in with the pod to see if relevant to ask about.',
'Attachments are being sent?':'Are they uploading attachments? Attachments can be a helpful source of extra context for their errors. In particular, for Mobile SDKs this could be Screenshots or View Hierarchies, for Native projects this could be the crash-dump.',
'Profiles are being used?':'If this is a Mobile or Back-end project, profiling should be suggested as the next step after Performance Monitoring. This allows users to identify the root cause of slowness in their application down to the line of code. We\'re one of the only ones to offer Real User Profiles for Mobile, and the only ones to offer it with a solution as complete as our platform.',
'Project has alerts set up?':'Your project doesn\'t leverage real time alerting for issues. Consider adding a baseline for alert visibility to track new high volume issues & regressions.',
'Project has metric alerts set up?':'Are there alerts set up on any metrics? This could be Throughput, any of the Core Web/Mobile Vitals, or any other metric that\'s tracked by Sentry.',
'Project has a CFSR Alert?':'Crash Free Session Rate tracking can be enhanced with real time session based alerting. Get notified via your preferred tool by leveraging out integrations platform.',
'Project has an alert which utilises a messaging integration':'Is there an alert from this project which utilizes Slack/Teams?',
'Project is Mobile':'Self Explanatory',

'Project links issues':'Do they use an issue tracking software such as JIRA and do they actually link their Sentry issues? If not, this means they probably don\'t leverage the integration as well as they could. Suggest using Alerts to automatically create JIRA tickets on issue creation with filters to ensure a lack of noise. Also mention the workflow available with bi-directional syncing between JIRA and Sentry, meaning when an issue gets resolved in Sentry it\'s closes on JIRA, and if it regresses it\'ll re-open both! Very useful for regression tracking.',
'Project Platform':'What Platform is this project set to?',
'Uses all Error Types':'Do they use all error types? ATM this field is specific to mobile use case projects, ignore otherwise.',
'HTTP Spans Instrumented':'Are HTTP spans being created in txns for this project? If not, they won\'t be able to access Performance Issues leveraging this data. DEFAULTS TO TRUE FOR NON MOBILE. MOBILE ONLY FIELD',
'DB Spans Instrumented (perf issues)':'Are DB spans being created in txns for this project? If not, they won\'t be able to access Performance Issues leveraging this data. DEFAULTS TO TRUE FOR NON MOBILE. MOBILE ONLY FIELD',
'UI Spans Instrumented':'Are UI spans being created in txns for this project? If not, they won\'t be able to access Performance Issues leveraging this data. DEFAULTS TO TRUE FOR NON MOBILE. MOBILE ONLY FIELD',
'HTTP Client Errors':'Are there HTTP Client Errors being detected? This requires an updated SDK generally. Mobile Specific.',
'Router Instrumented?': 'Javascript Frontend Specific. Is the Router instrumentation used? This will have a major impact on the experience of the user with performance monitoring, particularly in the auto-instrumentation realm. If this is false, check in with your SE!',
'Using Session Replay?': 'Javascript Frontend Specific. If the project is not using Session Replay this is a great outreach opportunity. Session Replay is a huge hit with Front end customers! Make sure to link our docs https://docs.sentry.io/product/session-replay/ too.'
}

export const ORG_EXPLAINERS = {
'Organization Name':'',
'Using SCIM':'Are they utilizing SCIM provisioning? For enterprise organizations this may be preferred for their ease of onboarding.',
'Using SSO':'Are they using SSO login? If not, this may be something they\'d be interested in to streamline their Sentry logins across their org.',
'Using Messaging Integration':'Do they have Slack/Teams integrated?',
'Using SCM Integration':'Do they have Github/Gitlab/Bitbucket integrated',
'Using Issue Tracking Integration':'Do they have JIRA/Azure Devops integrated?',
'Projects Created Recently':'How many projects have been created recently?',
'Members Invited Recently':'How many members have been invited recently?',
'Teams have been used recently (Either created or joined)':'How many teams have been created or joined recently?',
'Project Settings edited recently':'How many project settings have been edited recently?',
'Renewal in next 6 months':'Is the renewal coming up?',
'Average Error Quota Usage over the past 6 months':'% of quota used over the past 6 months',
'Average Txn Quota Usage over the past 6 months':'% of quota used over the past 6 months',
'Average Attachment Quota Usage over the past 6 months':'% of quota used over the past 6 months'
}