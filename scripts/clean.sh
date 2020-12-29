#!/bin/bash
rm -rf ./v1/**/*/package-lock.json; 
rm -rf ./v1//**/*/.nyc_output; 
rm -rf ./v1//**/*/coverage;
rm -rf ./v1//**/*/run; 
rm -rf ./v1//**/*/logs; 
rm -rf ./v1//**/*/dist;
rm -rf ./v2/**/*/package-lock.json; 
rm -rf ./v2//**/*/.nyc_output; 
rm -rf ./v2//**/*/coverage;
rm -rf ./v2//**/*/run; 
rm -rf ./v2//**/*/logs; 
rm -rf ./v2//**/*/dist;
rm -rf package-lock.json; 