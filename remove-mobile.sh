#!/bin/bash

set -e

echo "Removing tests/mobile folder..."
rm -rf tests/mobile

echo "Removing apps folder..."
rm -rf apps

echo "Removing mobilewright packages..."
npm uninstall @mobilewright/test mobilewright

echo "Done. Mobile testing removed from project."