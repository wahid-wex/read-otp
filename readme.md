# Read-otp
This package created to read otp-sms in web.


## Requirement:
* your website must have ssl (or must be on https protocol)
* your website must be PWA

## How to use?
you just need to implement function and then wait for otp-sms.
this function will automatically abort after 2 minute, so if you want to wait more change the parameter.
```ts
import { readOtpSms } from "read-otp"
// wait for 3 minute to get OTP-SMS
readOtpSms(3).then((code: string) => {
    // set the code anywhere you want. 
}).catch((e: Error) => {
    // hanle error.
})
```
## Compatibility
Potentially in web we can not access the sms or connect to OS, so browsers are our mediators.
also this code use browser apis ,So some of them may not support this feature.
here you can read about  [Compatibility](https://caniuse.com/mdn-api_otpcredential).

## OTP Signature
in the end of sms must be like this:
* `your website: website.org`
* `code: 1111`
```dtd
this is the OTP from my website , blah blah.
@website.org #1111
```

