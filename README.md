# Universal Serial Bus Device Class Definition for Audio Devices

TypeScript constants from Appendix A of the USB Audio Device Class Definition, Release 3.0.

## Install

```bash
npm install usb-audio
```

## Usage

```ts
import { FU_MUTE_CONTROL, FUNCTION_SUBCLASS_HEADPHONE } from 'usb-audio';
```

Every constant is exported with a literal type, so each name can be used as both a value and a type via `typeof`.

## Naming

Identifiers follow the Linux kernel convention from [`include/linux/usb/audio-v3.h`](https://github.com/torvalds/linux/blob/master/include/linux/usb/audio-v3.h), without the `UAC3_` prefix. A few names from 0.0.4 that collided between A.2 and A.7 (`HEADPHONE`, `MICROPHONE`, `HEADSET`, `HEADSET_ADAPTER`, `SPEAKERPHONE`, `SPEAKER`, `FULL_ADC_3_0`, `GENERIC_I_O`) are kept as `@deprecated` aliases.

## Coverage

All of Appendix A from the spec (A.1 through A.24). The body of the spec — descriptor structures, request behavior, terminal types from the separate USB-IF Terminal Types document — is not yet included.

## References

- [USB Audio 3.0 spec](https://www.usb.org/sites/default/files/USB_Audio_v3.0.zip) ([adopters agreement](https://usb.org/document-library/usb-audio-devices-rev-30-and-adopters-agreement))
- [Linux `audio-v3.h`](https://github.com/torvalds/linux/blob/master/include/linux/usb/audio-v3.h)
- [Apple `AppleUSBAudioDictionary.h`](https://github.com/nickdowell/AppleUSBAudio-273.4.1/blob/master/AppleUSBAudioDictionary.h)
