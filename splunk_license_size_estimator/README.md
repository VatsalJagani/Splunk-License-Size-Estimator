# Splunk License Size Estimator

A Splunk app that helps estimate daily data volume (license consumption) based on your environment configuration.

## Features

- Interactive UI for configuring data sources
- Real-time calculation of estimated license size
- Support for multiple data source types:
  - Windows Servers
  - Sysmon for Windows
  - Linux Servers
  - Active Directory
  - Firewalls
  - WAF (Web Application Firewall)
  - Network Switches
- Environment size factor slider (1-10)
- Detailed breakdown of calculated sizes
- Important notes about additional considerations

## Installation

1. Download or clone this repository
2. Copy the `splunk_license_size_estimator` directory to `$SPLUNK_HOME/etc/apps/`
3. Restart Splunk
4. Navigate to the app from the Splunk Apps menu

## Usage

1. Open the "Splunk License Size Estimator" app
2. Check the boxes for data sources present in your environment
3. Enter the approximate counts for each enabled data source
4. Adjust the Environment Size slider based on your environment's activity level (5 = typical)
5. View the estimated daily data size in GB

## Calculation Method

The app uses the following baseline formulas (at Environment Size = 5):
- **Windows:** 10 servers = 1 GB/day
- **Sysmon:** 10 servers = 2 GB/day
- **Linux:** 10 servers = 1 GB/day
- **Active Directory:** 100 users = 1 GB/day
- **Firewalls:** 1 firewall = 3 GB/day
- **WAF:** 1 WAF = 3 GB/day
- **Switches:** 5 switches = 1 GB/day

All values are multiplied by (Environment Size / 5) to account for environment variations.

## Important Notes

### Additional Application Logs
Some application logs can vary significantly and should be measured separately:
- **Cloudflare:** minimum 20 GB
- **Custom Applications:** minimum 5-10 GB

### Cloud Tenancy Logs
Cloud tenancy logs are typically small but should be considered if total estimated size is below 20 GB:
- EntraID/Office365
- Google Workspace
- AWS CloudTrail
- Tenable
- Qualys
- Other cloud services

## Version

1.0.0

## Author

Vatsal Jagani

## License

This app is provided as-is for estimation purposes only. Actual license consumption may vary based on specific configurations and usage patterns.
