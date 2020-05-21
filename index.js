// Indexes track titles (not tables) in Audio30.pdf
// - https://usb.org/document-library/usb-audio-devices-rev-30-and-adopters-agreement
// - https://www.usb.org/sites/default/files/USB_Audio_v3.0.zip

// Appendix A

// A.1 - in pointers

// A.2

export const FUNCTION_SUBCLASS_UNDEFINED = 0x00;
export const FULL_ADC_3_0 = 0x01;
export const GENERIC_I_O = 0x20;
export const HEADPHONE = 0x21;
export const SPEAKER = 0x22;
export const MICROPHONE = 0x23;
export const HEADSET = 0x24;
export const HEADSET_ADAPTER = 0x25;
export const SPEAKERPHONE = 0x26;

// A.3 - in pointers

// A.4 AUDIO INTERFACE CLASS CODE

export const AUDIO = 0x01;

// ...

// A.6

export const IP_VERSION_01_00 = 0x00;
export const IP_VERSION_02_00 = 0x20;
export const IP_VERSION_03_00 = 0x30;

// A.22 Audio Class-Specific Request Codes

export const REQUEST_CODE_UNDEFINED = 0x00;
export const CUR = 0x01;
export const RANGE = 0x02;
export const MEM = 0x03;
export const INTEN = 0x04;
export const STRING = 0x05;
export const HIGH_CAPABILITY_DESCRIPTOR = 0x06;

// ...

// A.23.8 FEATURE UNIT CONTROL SELECTORS

export const FU_CONTROL_UNDEFINED = 0x00;
export const FU_MUTE_CONTROL = 0x01;
export const FU_VOLUME_CONTROL = 0x02;
export const FU_BASS_CONTROL = 0x03;
export const FU_MID_CONTROL = 0x04;
export const FU_TREBLE_CONTROL = 0x05;
export const FU_GRAPHIC_EQUALIZER_CONTROL = 0x06;
export const FU_AUTOMATIC_GAIN_CONTROL = 0x07;
export const FU_DELAY_CONTROL = 0x08;
export const FU_BASS_BOOST_CONTROL = 0x09;
export const FU_LOUDNESS_CONTROL = 0x0a;
export const FU_INPUT_GAIN_CONTROL = 0x0b;
export const FU_INPUT_GAIN_PAD_CONTROL = 0x0c;
export const FU_PHASE_INVERTER_CONTROL = 0x0d;
export const FU_UNDERFLOW_CONTROL = 0x0e;
export const FU_OVERFLOW_CONTROL = 0x0f;
export const FU_LATENCY_CONTROL = 0x1;

// Sections with pointers

// A.1

export const AUDIO_FUNCTION = AUDIO;
// A.3 AUDIO FUNCTION PROTOCOL CODES

export const FUNCTION_PROTOCOL_UNDEFINED = 0x00;
export const AF_VERSION_01_00 = IP_VERSION_01_00;
export const AF_VERSION_02_00 = IP_VERSION_02_00;
export const AF_VERSION_03_00 = IP_VERSION_03_00;
