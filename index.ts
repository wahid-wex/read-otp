export const readOtpSms = (minute: number = 2): Promise<string> => {
  return new Promise(async (resolve, reject) => {
    const signal = new AbortController();
    setTimeout(() => {
      signal.abort();
    }, minute * 60 * 1000);

    if ('OTPCredential' in window) {
      try {
        if (navigator.credentials) {
          try {
            const content: any = await navigator.credentials
              .get(<CredentialRequestOptions>{
                otp: {transport: ['sms']},
                abort: signal.signal,
              });
            resolve(content.code);
          } catch (err) {
            console.log(err);
            reject(err);
          }
        }
      } catch (err) {
        console.log(err);
        reject(err);
      }
    }
  });
}
