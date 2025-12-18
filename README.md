# Splunk License Size Estimator

A Splunk app that helps estimate daily data volume (license consumption) based on your environment configuration.

## Overview

This app provides an interactive calculator to estimate your Splunk license requirements based on:
- Number and types of data sources (Windows, Linux, Active Directory, etc.)
- Network infrastructure (Firewalls, WAF, Switches)
- Environment size and activity level

## Quick Start

1. Install the app by copying the `splunk_license_size_estimator` directory to `$SPLUNK_HOME/etc/apps/`
2. Restart Splunk
3. Open the "Splunk License Size Estimator" app from your Splunk interface
4. Configure your data sources and see real-time license estimates

## Features

- ✅ Interactive checkbox-based data source selection
- ✅ Conditional number inputs for precise configuration
- ✅ Environment size slider (1-10 scale)
- ✅ Real-time calculation with detailed breakdown
- ✅ Important notes about additional considerations
- ✅ Responsive design for various screen sizes

## Documentation

See the [app README](splunk_license_size_estimator/README.md) for detailed documentation, calculation methods, and usage instructions.

## Version

1.0.0

## Author

Vatsal Jagani
