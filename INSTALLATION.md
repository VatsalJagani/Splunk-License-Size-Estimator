# Installation Guide

## Prerequisites
- Splunk Enterprise 7.0 or later
- Web browser with JavaScript enabled

## Installation Steps

### Option 1: Manual Installation
1. Download or clone this repository
2. Copy the `splunk_license_size_estimator` directory to your Splunk installation:
   ```
   $SPLUNK_HOME/etc/apps/
   ```
3. Restart Splunk:
   ```bash
   $SPLUNK_HOME/bin/splunk restart
   ```
4. Log in to Splunk Web
5. Navigate to Apps → Splunk License Size Estimator

### Option 2: Using Splunk CLI
```bash
cd /path/to/repository
cp -r splunk_license_size_estimator $SPLUNK_HOME/etc/apps/
$SPLUNK_HOME/bin/splunk restart
```

## Verification
After installation, verify the app is working:
1. Go to Splunk Web
2. Click on the Apps menu
3. Select "Splunk License Size Estimator"
4. You should see the calculator interface

## Usage

### Basic Usage
1. Check the boxes for data sources present in your environment
2. Enter approximate counts for each enabled data source
3. Adjust the Environment Size slider (default is 5 for typical environments)
4. View the estimated daily data size in GB

### Understanding the Environment Size Slider
- **1-3**: Small, low-activity environment
- **4-6**: Typical/average environment (5 is the baseline)
- **7-10**: Large, high-activity environment

The slider multiplies all calculations proportionally. For example:
- At size 5: 100 Windows servers = 10 GB/day
- At size 10: 100 Windows servers = 20 GB/day (2x multiplier)

### Example Scenario
For an environment with:
- 200 Windows servers
- 100 servers with Sysmon
- 50 Linux servers
- 10 Firewalls
- Environment size: 7 (slightly larger than average)

Expected output: ~128 GB/day

### Important Considerations
- The calculator provides estimates based on typical log volumes
- Actual volumes may vary based on:
  - Logging verbosity settings
  - Security policies
  - Application-specific logging
  - Custom configurations
- Review the "Important Notes" section for additional data sources not included in automatic calculations

## Troubleshooting

### App doesn't appear in the Apps menu
- Verify the app directory is in `$SPLUNK_HOME/etc/apps/`
- Check Splunk's internal logs: `$SPLUNK_HOME/var/log/splunk/splunkd.log`
- Ensure proper file permissions

### Calculator not functioning
- Check browser console for JavaScript errors (F12)
- Verify JavaScript is enabled in your browser
- Try clearing browser cache
- Ensure you're using a supported browser (Chrome, Firefox, Safari, Edge)

### Calculation seems incorrect
- Verify you've entered the correct counts
- Check the Environment Size slider value
- Review the breakdown to see individual contributions
- Compare with the formulas in the README

## Uninstallation
```bash
rm -rf $SPLUNK_HOME/etc/apps/splunk_license_size_estimator
$SPLUNK_HOME/bin/splunk restart
```

## Support
For issues, questions, or feature requests, please visit:
https://github.com/VatsalJagani/Splunk-License-Size-Estimator/issues
