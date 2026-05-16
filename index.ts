// USB Device Class Definition for Audio Devices, Release 3.0 — Appendix A
//
// Identifier naming follows the Linux kernel convention from
// include/linux/usb/audio-v3.h (without the UAC3_ prefix).
//
// References:
//   https://usb.org/document-library/usb-audio-devices-rev-30-and-adopters-agreement
//   https://www.usb.org/sites/default/files/USB_Audio_v3.0.zip
//   https://github.com/torvalds/linux/blob/master/include/linux/usb/audio-v3.h

// ----------------------------------------------------------------------------
// A.4 AUDIO INTERFACE CLASS CODE
// ----------------------------------------------------------------------------
export const AUDIO = 0x01;

// ----------------------------------------------------------------------------
// A.1 AUDIO FUNCTION CLASS CODE
// ----------------------------------------------------------------------------
export const AUDIO_FUNCTION = AUDIO;

// ----------------------------------------------------------------------------
// A.2 AUDIO FUNCTION SUBCLASS CODES
// ----------------------------------------------------------------------------
export const FUNCTION_SUBCLASS_UNDEFINED = 0x00;
export const FUNCTION_SUBCLASS_FULL_ADC_3_0 = 0x01;
export const FUNCTION_SUBCLASS_GENERIC_IO = 0x20;
export const FUNCTION_SUBCLASS_HEADPHONE = 0x21;
export const FUNCTION_SUBCLASS_SPEAKER = 0x22;
export const FUNCTION_SUBCLASS_MICROPHONE = 0x23;
export const FUNCTION_SUBCLASS_HEADSET = 0x24;
export const FUNCTION_SUBCLASS_HEADSET_ADAPTER = 0x25;
export const FUNCTION_SUBCLASS_SPEAKERPHONE = 0x26;

// ----------------------------------------------------------------------------
// A.6 AUDIO INTERFACE PROTOCOL CODES (declared before A.3 which references it)
// ----------------------------------------------------------------------------
export const IP_VERSION_01_00 = 0x00;
export const IP_VERSION_02_00 = 0x20;
export const IP_VERSION_03_00 = 0x30;

// ----------------------------------------------------------------------------
// A.3 AUDIO FUNCTION PROTOCOL CODES
// ----------------------------------------------------------------------------
export const FUNCTION_PROTOCOL_UNDEFINED = 0x00;
export const AF_VERSION_01_00 = IP_VERSION_01_00;
export const AF_VERSION_02_00 = IP_VERSION_02_00;
export const AF_VERSION_03_00 = IP_VERSION_03_00;

// ----------------------------------------------------------------------------
// A.5 AUDIO INTERFACE SUBCLASS CODES
// ----------------------------------------------------------------------------
export const INTERFACE_SUBCLASS_UNDEFINED = 0x00;
export const AUDIOCONTROL = 0x01;
export const AUDIOSTREAMING = 0x02;
export const MIDISTREAMING = 0x03;

// ----------------------------------------------------------------------------
// A.7 AUDIO FUNCTION CATEGORY CODES
// ----------------------------------------------------------------------------
// FUNCTION_SUBCLASS_UNDEFINED (0x00) above also serves as the "undefined"
// entry per the spec's table A-7.
export const FUNCTION_DESKTOP_SPEAKER = 0x01;
export const FUNCTION_HOME_THEATER = 0x02;
export const FUNCTION_MICROPHONE = 0x03;
export const FUNCTION_HEADSET = 0x04;
export const FUNCTION_TELEPHONE = 0x05;
export const FUNCTION_CONVERTER = 0x06;
export const FUNCTION_SOUND_RECORDER = 0x07;
export const FUNCTION_IO_BOX = 0x08;
export const FUNCTION_MUSICAL_INSTRUMENT = 0x09;
export const FUNCTION_PRO_AUDIO = 0x0a;
export const FUNCTION_AUDIO_VIDEO = 0x0b;
export const FUNCTION_CONTROL_PANEL = 0x0c;
export const FUNCTION_HEADPHONE = 0x0d;
export const FUNCTION_GENERIC_SPEAKER = 0x0e;
export const FUNCTION_HEADSET_ADAPTER = 0x0f;
export const FUNCTION_SPEAKERPHONE = 0x10;
export const FUNCTION_OTHER = 0xff;

// ----------------------------------------------------------------------------
// A.8 AUDIO CLASS-SPECIFIC DESCRIPTOR TYPES
// ----------------------------------------------------------------------------
export const CS_UNDEFINED = 0x20;
export const CS_DEVICE = 0x21;
export const CS_CONFIGURATION = 0x22;
export const CS_STRING = 0x23;
export const CS_INTERFACE = 0x24;
export const CS_ENDPOINT = 0x25;
export const CS_CLUSTER = 0x26;

// ----------------------------------------------------------------------------
// A.9 CLUSTER DESCRIPTOR SUBTYPES
// ----------------------------------------------------------------------------
export const CLUSTER_SUBTYPE_UNDEFINED = 0x00;

// ----------------------------------------------------------------------------
// A.10 CLUSTER DESCRIPTOR SEGMENT TYPES
// ----------------------------------------------------------------------------
export const SEGMENT_UNDEFINED = 0x00;
export const CLUSTER_DESCRIPTION = 0x01;
export const CLUSTER_VENDOR_DEFINED = 0x1f;
export const CHANNEL_INFORMATION = 0x20;
export const CHANNEL_AMBISONIC = 0x21;
export const CHANNEL_DESCRIPTION = 0x22;
export const CHANNEL_VENDOR_DEFINED = 0xfe;
export const END_SEGMENT = 0xff;

// ----------------------------------------------------------------------------
// A.11 CHANNEL PURPOSE DEFINITIONS
// ----------------------------------------------------------------------------
export const PURPOSE_UNDEFINED = 0x00;
export const PURPOSE_GENERIC_AUDIO = 0x01;
export const PURPOSE_VOICE = 0x02;
export const PURPOSE_SPEECH = 0x03;
export const PURPOSE_AMBIENT = 0x04;
export const PURPOSE_REFERENCE = 0x05;
export const PURPOSE_ULTRASONIC = 0x06;
export const PURPOSE_VIBROKINETIC = 0x07;
export const PURPOSE_NON_AUDIO = 0xff;

// ----------------------------------------------------------------------------
// A.12 CHANNEL RELATIONSHIP DEFINITIONS
// ----------------------------------------------------------------------------
export const CH_RELATIONSHIP_UNDEFINED = 0x00;
export const CH_MONO = 0x01;
export const CH_LEFT = 0x02;
export const CH_RIGHT = 0x03;
export const CH_ARRAY = 0x04;
export const CH_PATTERN_X = 0x20;
export const CH_PATTERN_Y = 0x21;
export const CH_PATTERN_A = 0x22;
export const CH_PATTERN_B = 0x23;
export const CH_PATTERN_M = 0x24;
export const CH_PATTERN_S = 0x25;
export const CH_FRONT_LEFT = 0x80;
export const CH_FRONT_RIGHT = 0x81;
export const CH_FRONT_CENTER = 0x82;
export const CH_FRONT_LEFT_OF_CENTER = 0x83;
export const CH_FRONT_RIGHT_OF_CENTER = 0x84;
export const CH_FRONT_WIDE_LEFT = 0x85;
export const CH_FRONT_WIDE_RIGHT = 0x86;
export const CH_SIDE_LEFT = 0x87;
export const CH_SIDE_RIGHT = 0x88;
export const CH_SURROUND_ARRAY_LEFT = 0x89;
export const CH_SURROUND_ARRAY_RIGHT = 0x8a;
export const CH_BACK_LEFT = 0x8b;
export const CH_BACK_RIGHT = 0x8c;
export const CH_BACK_CENTER = 0x8d;
export const CH_BACK_LEFT_OF_CENTER = 0x8e;
export const CH_BACK_RIGHT_OF_CENTER = 0x8f;
export const CH_BACK_WIDE_LEFT = 0x90;
export const CH_BACK_WIDE_RIGHT = 0x91;
export const CH_TOP_CENTER = 0x92;
export const CH_TOP_FRONT_LEFT = 0x93;
export const CH_TOP_FRONT_RIGHT = 0x94;
export const CH_TOP_FRONT_CENTER = 0x95;
export const CH_TOP_FRONT_LOC = 0x96;
export const CH_TOP_FRONT_ROC = 0x97;
export const CH_TOP_FRONT_WIDE_LEFT = 0x98;
export const CH_TOP_FRONT_WIDE_RIGHT = 0x99;
export const CH_TOP_SIDE_LEFT = 0x9a;
export const CH_TOP_SIDE_RIGHT = 0x9b;
export const CH_TOP_SURR_ARRAY_LEFT = 0x9c;
export const CH_TOP_SURR_ARRAY_RIGHT = 0x9d;
export const CH_TOP_BACK_LEFT = 0x9e;
export const CH_TOP_BACK_RIGHT = 0x9f;
export const CH_TOP_BACK_CENTER = 0xa0;
export const CH_TOP_BACK_LOC = 0xa1;
export const CH_TOP_BACK_ROC = 0xa2;
export const CH_TOP_BACK_WIDE_LEFT = 0xa3;
export const CH_TOP_BACK_WIDE_RIGHT = 0xa4;
export const CH_BOTTOM_CENTER = 0xa5;
export const CH_BOTTOM_FRONT_LEFT = 0xa6;
export const CH_BOTTOM_FRONT_RIGHT = 0xa7;
export const CH_BOTTOM_FRONT_CENTER = 0xa8;
export const CH_BOTTOM_FRONT_LOC = 0xa9;
export const CH_BOTTOM_FRONT_ROC = 0xaa;
export const CH_BOTTOM_FRONT_WIDE_LEFT = 0xab;
export const CH_BOTTOM_FRONT_WIDE_RIGHT = 0xac;
export const CH_BOTTOM_SIDE_LEFT = 0xad;
export const CH_BOTTOM_SIDE_RIGHT = 0xae;
export const CH_BOTTOM_SURR_ARRAY_LEFT = 0xaf;
export const CH_BOTTOM_SURR_ARRAY_RIGHT = 0xb0;
export const CH_BOTTOM_BACK_LEFT = 0xb1;
export const CH_BOTTOM_BACK_RIGHT = 0xb2;
export const CH_BOTTOM_BACK_CENTER = 0xb3;
export const CH_BOTTOM_BACK_LOC = 0xb4;
export const CH_BOTTOM_BACK_ROC = 0xb5;
export const CH_BOTTOM_BACK_WIDE_LEFT = 0xb6;
export const CH_BOTTOM_BACK_WIDE_RIGHT = 0xb7;
export const CH_LOW_FREQUENCY_EFFECTS = 0xb8;
export const CH_LFE_LEFT = 0xb9;
export const CH_LFE_RIGHT = 0xba;
export const CH_HEADPHONE_LEFT = 0xbb;
export const CH_HEADPHONE_RIGHT = 0xbc;

// ----------------------------------------------------------------------------
// A.13 AMBISONIC COMPONENT ORDERING CONVENTION TYPES
// ----------------------------------------------------------------------------
export const ORD_TYPE_UNDEFINED = 0x00;
export const AMBISONIC_CHANNEL_NUMBER = 0x01;
export const FURSE_MALHAM = 0x02;
export const SINGLE_INDEX_DESIGNATION = 0x03;

// ----------------------------------------------------------------------------
// A.14 AMBISONIC NORMALIZATION TYPES
// ----------------------------------------------------------------------------
export const NORM_TYPE_UNDEFINED = 0x00;
export const MAXN = 0x01;
export const SN3D = 0x02;
export const N3D = 0x03;
export const SN2D = 0x04;
export const N2D = 0x05;

// ----------------------------------------------------------------------------
// A.15 AUDIO CLASS-SPECIFIC AC INTERFACE DESCRIPTOR SUBTYPES
// ----------------------------------------------------------------------------
export const AC_DESCRIPTOR_UNDEFINED = 0x00;
export const HEADER = 0x01;
export const INPUT_TERMINAL = 0x02;
export const OUTPUT_TERMINAL = 0x03;
export const EXTENDED_TERMINAL = 0x04;
export const MIXER_UNIT = 0x05;
export const SELECTOR_UNIT = 0x06;
export const FEATURE_UNIT = 0x07;
export const EFFECT_UNIT = 0x08;
export const PROCESSING_UNIT = 0x09;
export const EXTENSION_UNIT = 0x0a;
export const CLOCK_SOURCE = 0x0b;
export const CLOCK_SELECTOR = 0x0c;
export const CLOCK_MULTIPLIER = 0x0d;
export const SAMPLE_RATE_CONVERTER = 0x0e;
export const CONNECTORS = 0x0f;
export const POWER_DOMAIN = 0x10;

// ----------------------------------------------------------------------------
// A.16 AUDIO CLASS-SPECIFIC AS INTERFACE DESCRIPTOR SUBTYPES
// ----------------------------------------------------------------------------
export const AS_DESCRIPTOR_UNDEFINED = 0x00;
export const AS_GENERAL = 0x01;
export const AS_VALID_FREQ_RANGE = 0x02;

// ----------------------------------------------------------------------------
// A.17 AUDIO CLASS-SPECIFIC STRING DESCRIPTOR SUBTYPES
// ----------------------------------------------------------------------------
export const STRING_SUBTYPE_UNDEFINED = 0x00;

// ----------------------------------------------------------------------------
// A.18 EXTENDED TERMINAL SEGMENT TYPES
// ----------------------------------------------------------------------------
export const TERMINAL_SEGMENT_UNDEFINED = 0x00;
export const TERMINAL_VENDOR_DEFINED = 0x1f;
export const CHANNEL_BANDWIDTH = 0x20;
export const CHANNEL_MAGNITUDE_RESPONSE = 0x21;
export const CHANNEL_MAGNITUDE_PHASE_RESPONSE = 0x22;
export const CHANNEL_POSITION_XYZ = 0x23;
export const CHANNEL_POSITION_R_THETA_PHI = 0x24;
// CHANNEL_VENDOR_DEFINED (0xfe) and END_SEGMENT (0xff) — see A.10.

// ----------------------------------------------------------------------------
// A.19 EFFECT UNIT EFFECT TYPES
// ----------------------------------------------------------------------------
export const EFFECT_UNDEFINED = 0x0000;
export const PARAM_EQ_SECTION_EFFECT = 0x0001;
export const REVERBERATION_EFFECT = 0x0002;
export const MOD_DELAY_EFFECT = 0x0003;
export const DYN_RANGE_COMP_EFFECT = 0x0004;

// ----------------------------------------------------------------------------
// A.20 PROCESSING UNIT PROCESS TYPES
// ----------------------------------------------------------------------------
export const PROCESS_UNDEFINED = 0x0000;
export const PROCESS_UP_DOWNMIX = 0x0001;
export const PROCESS_STEREO_EXTENDER = 0x0002;
export const PROCESS_MULTI_FUNCTION = 0x0003;

// ----------------------------------------------------------------------------
// A.21 AUDIO CLASS-SPECIFIC ENDPOINT DESCRIPTOR SUBTYPES
// ----------------------------------------------------------------------------
export const EP_DESCRIPTOR_UNDEFINED = 0x00;
export const EP_GENERAL = 0x01;

// ----------------------------------------------------------------------------
// A.22 AUDIO CLASS-SPECIFIC REQUEST CODES
// ----------------------------------------------------------------------------
export const REQUEST_CODE_UNDEFINED = 0x00;
export const CUR = 0x01;
export const RANGE = 0x02;
export const MEM = 0x03;
export const INTEN = 0x04;
export const STRING = 0x05;
export const HIGH_CAPABILITY_DESCRIPTOR = 0x06;

// ----------------------------------------------------------------------------
// A.23.1 AUDIOCONTROL INTERFACE CONTROL SELECTORS
// ----------------------------------------------------------------------------
export const AC_CONTROL_UNDEFINED = 0x00;
export const AC_ACTIVE_INTERFACE_CONTROL = 0x01;
export const AC_POWER_DOMAIN_CONTROL = 0x02;

// ----------------------------------------------------------------------------
// A.23.2 CLOCK SOURCE CONTROL SELECTORS
// ----------------------------------------------------------------------------
export const CS_CONTROL_UNDEFINED = 0x00;
export const CS_SAM_FREQ_CONTROL = 0x01;
export const CS_CLOCK_VALID_CONTROL = 0x02;

// ----------------------------------------------------------------------------
// A.23.3 CLOCK SELECTOR CONTROL SELECTORS
// ----------------------------------------------------------------------------
export const CX_CONTROL_UNDEFINED = 0x00;
export const CX_CLOCK_SELECTOR_CONTROL = 0x01;

// ----------------------------------------------------------------------------
// A.23.4 CLOCK MULTIPLIER CONTROL SELECTORS
// ----------------------------------------------------------------------------
export const CM_CONTROL_UNDEFINED = 0x00;
export const CM_NUMERATOR_CONTROL = 0x01;
export const CM_DENOMINATOR_CONTROL = 0x02;

// ----------------------------------------------------------------------------
// A.23.5 TERMINAL CONTROL SELECTORS
// ----------------------------------------------------------------------------
export const TE_CONTROL_UNDEFINED = 0x00;
export const TE_INSERTION_CONTROL = 0x01;
export const TE_OVERLOAD_CONTROL = 0x02;
export const TE_UNDERFLOW_CONTROL = 0x03;
export const TE_OVERFLOW_CONTROL = 0x04;
export const TE_LATENCY_CONTROL = 0x05;

// ----------------------------------------------------------------------------
// A.23.6 MIXER CONTROL SELECTORS
// ----------------------------------------------------------------------------
export const MU_CONTROL_UNDEFINED = 0x00;
export const MU_MIXER_CONTROL = 0x01;
export const MU_UNDERFLOW_CONTROL = 0x02;
export const MU_OVERFLOW_CONTROL = 0x03;
export const MU_LATENCY_CONTROL = 0x04;

// ----------------------------------------------------------------------------
// A.23.7 SELECTOR CONTROL SELECTORS
// ----------------------------------------------------------------------------
export const SU_CONTROL_UNDEFINED = 0x00;
export const SU_SELECTOR_CONTROL = 0x01;
export const SU_LATENCY_CONTROL = 0x02;

// ----------------------------------------------------------------------------
// A.23.8 FEATURE UNIT CONTROL SELECTORS
// ----------------------------------------------------------------------------
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
export const FU_LATENCY_CONTROL = 0x10;

// ----------------------------------------------------------------------------
// A.23.9.1 PARAMETRIC EQUALIZER SECTION EFFECT UNIT CONTROL SELECTORS
// ----------------------------------------------------------------------------
export const PE_CONTROL_UNDEFINED = 0x00;
export const PE_ENABLE_CONTROL = 0x01;
export const PE_CENTERFREQ_CONTROL = 0x02;
export const PE_QFACTOR_CONTROL = 0x03;
export const PE_GAIN_CONTROL = 0x04;
export const PE_UNDERFLOW_CONTROL = 0x05;
export const PE_OVERFLOW_CONTROL = 0x06;
export const PE_LATENCY_CONTROL = 0x07;

// ----------------------------------------------------------------------------
// A.23.9.2 REVERBERATION EFFECT UNIT CONTROL SELECTORS
// ----------------------------------------------------------------------------
export const RV_CONTROL_UNDEFINED = 0x00;
export const RV_ENABLE_CONTROL = 0x01;
export const RV_TYPE_CONTROL = 0x02;
export const RV_LEVEL_CONTROL = 0x03;
export const RV_TIME_CONTROL = 0x04;
export const RV_FEEDBACK_CONTROL = 0x05;
export const RV_PREDELAY_CONTROL = 0x06;
export const RV_DENSITY_CONTROL = 0x07;
export const RV_HIFREQ_ROLLOFF_CONTROL = 0x08;
export const RV_UNDERFLOW_CONTROL = 0x09;
export const RV_OVERFLOW_CONTROL = 0x0a;
export const RV_LATENCY_CONTROL = 0x0b;

// ----------------------------------------------------------------------------
// A.23.9.3 MODULATION DELAY EFFECT UNIT CONTROL SELECTORS
// ----------------------------------------------------------------------------
export const MD_CONTROL_UNDEFINED = 0x00;
export const MD_ENABLE_CONTROL = 0x01;
export const MD_BALANCE_CONTROL = 0x02;
export const MD_RATE_CONTROL = 0x03;
export const MD_DEPTH_CONTROL = 0x04;
export const MD_TIME_CONTROL = 0x05;
export const MD_FEEDBACK_CONTROL = 0x06;
export const MD_UNDERFLOW_CONTROL = 0x07;
export const MD_OVERFLOW_CONTROL = 0x08;
export const MD_LATENCY_CONTROL = 0x09;

// ----------------------------------------------------------------------------
// A.23.9.4 DYNAMIC RANGE COMPRESSOR EFFECT UNIT CONTROL SELECTORS
// ----------------------------------------------------------------------------
export const DR_CONTROL_UNDEFINED = 0x00;
export const DR_ENABLE_CONTROL = 0x01;
export const DR_COMPRESSION_RATE_CONTROL = 0x02;
export const DR_MAXAMPL_CONTROL = 0x03;
export const DR_THRESHOLD_CONTROL = 0x04;
export const DR_ATTACK_TIME_CONTROL = 0x05;
export const DR_RELEASE_TIME_CONTROL = 0x06;
export const DR_UNDERFLOW_CONTROL = 0x07;
export const DR_OVERFLOW_CONTROL = 0x08;
export const DR_LATENCY_CONTROL = 0x09;

// ----------------------------------------------------------------------------
// A.23.10.1 UP/DOWN-MIX PROCESSING UNIT CONTROL SELECTORS
// ----------------------------------------------------------------------------
export const UD_CONTROL_UNDEFINED = 0x00;
export const UD_MODE_SELECT_CONTROL = 0x01;
export const UD_UNDERFLOW_CONTROL = 0x02;
export const UD_OVERFLOW_CONTROL = 0x03;
export const UD_LATENCY_CONTROL = 0x04;

// ----------------------------------------------------------------------------
// A.23.10.2 STEREO EXTENDER PROCESSING UNIT CONTROL SELECTORS
// ----------------------------------------------------------------------------
export const ST_EXT_CONTROL_UNDEFINED = 0x00;
export const ST_EXT_WIDTH_CONTROL = 0x01;
export const ST_EXT_UNDERFLOW_CONTROL = 0x02;
export const ST_EXT_OVERFLOW_CONTROL = 0x03;
export const ST_EXT_LATENCY_CONTROL = 0x04;

// ----------------------------------------------------------------------------
// A.23.11 EXTENSION UNIT CONTROL SELECTORS
// ----------------------------------------------------------------------------
export const XU_CONTROL_UNDEFINED = 0x00;
export const XU_UNDERFLOW_CONTROL = 0x01;
export const XU_OVERFLOW_CONTROL = 0x02;
export const XU_LATENCY_CONTROL = 0x03;

// ----------------------------------------------------------------------------
// A.23.12 AUDIOSTREAMING INTERFACE CONTROL SELECTORS
// ----------------------------------------------------------------------------
export const AS_CONTROL_UNDEFINED = 0x00;
export const AS_ACT_ALT_SETTING_CONTROL = 0x01;
export const AS_VAL_ALT_SETTINGS_CONTROL = 0x02;
export const AS_AUDIO_DATA_FORMAT_CONTROL = 0x03;

// ----------------------------------------------------------------------------
// A.23.13 ENDPOINT CONTROL SELECTORS
// ----------------------------------------------------------------------------
export const EP_CONTROL_UNDEFINED = 0x00;
export const EP_PITCH_CONTROL = 0x01;
export const EP_DATA_OVERRUN_CONTROL = 0x02;
export const EP_DATA_UNDERRUN_CONTROL = 0x03;

// ----------------------------------------------------------------------------
// A.24 CONNECTOR TYPES
// ----------------------------------------------------------------------------
export const CONNECTOR_UNDEFINED = 0x00;
export const CONNECTOR_PHONE_2_5MM = 0x01;
export const CONNECTOR_PHONE_3_5MM = 0x02;
export const CONNECTOR_PHONE_6_35MM = 0x03;
export const CONNECTOR_XLR_6_35MM_COMBO = 0x04;
export const CONNECTOR_XLR = 0x05;
export const CONNECTOR_OPTICAL_3_5MM_COMBO = 0x06;
export const CONNECTOR_RCA = 0x07;
export const CONNECTOR_BNC = 0x08;
export const CONNECTOR_BANANA = 0x09;
export const CONNECTOR_BINDING_POST = 0x0a;
export const CONNECTOR_SPEAKON = 0x0b;
export const CONNECTOR_SPRING_CLIP = 0x0c;
export const CONNECTOR_SCREW_TYPE = 0x0d;
export const CONNECTOR_DIN = 0x0e;
export const CONNECTOR_MINI_DIN = 0x0f;
export const CONNECTOR_EUROBLOCK = 0x10;
export const CONNECTOR_USB_TYPE_C = 0x11;
export const CONNECTOR_RJ_11 = 0x12;
export const CONNECTOR_RJ_45 = 0x13;
export const CONNECTOR_TOSLINK = 0x14;
export const CONNECTOR_HDMI = 0x15;
export const CONNECTOR_MINI_HDMI = 0x16;
export const CONNECTOR_MICRO_HDMI = 0x17;
export const CONNECTOR_DP = 0x18;
export const CONNECTOR_MINI_DP = 0x19;
export const CONNECTOR_D_SUB = 0x1a;
export const CONNECTOR_THUNDERBOLT = 0x1b;
export const CONNECTOR_LIGHTNING = 0x1c;
export const CONNECTOR_WIRELESS = 0x1d;
export const CONNECTOR_USB_STANDARD_A = 0x1e;
export const CONNECTOR_USB_STANDARD_B = 0x1f;
export const CONNECTOR_USB_MINI_B = 0x20;
export const CONNECTOR_USB_MICRO_B = 0x21;
export const CONNECTOR_USB_MICRO_AB = 0x22;
export const CONNECTOR_USB_3_0_MICRO_B = 0x23;
export const CONNECTOR_OTHER = 0xff;

// ============================================================================
// Backwards-compatible aliases for names from versions <= 0.0.4 that
// have been renamed under the section-prefix scheme.
// ============================================================================

/** @deprecated Use `FUNCTION_SUBCLASS_FULL_ADC_3_0` */
export const FULL_ADC_3_0 = FUNCTION_SUBCLASS_FULL_ADC_3_0;
/** @deprecated Use `FUNCTION_SUBCLASS_GENERIC_IO` */
export const GENERIC_I_O = FUNCTION_SUBCLASS_GENERIC_IO;
/** @deprecated Use `FUNCTION_SUBCLASS_HEADPHONE` */
export const HEADPHONE = FUNCTION_SUBCLASS_HEADPHONE;
/** @deprecated Use `FUNCTION_SUBCLASS_SPEAKER` */
export const SPEAKER = FUNCTION_SUBCLASS_SPEAKER;
/** @deprecated Use `FUNCTION_SUBCLASS_MICROPHONE` */
export const MICROPHONE = FUNCTION_SUBCLASS_MICROPHONE;
/** @deprecated Use `FUNCTION_SUBCLASS_HEADSET` */
export const HEADSET = FUNCTION_SUBCLASS_HEADSET;
/** @deprecated Use `FUNCTION_SUBCLASS_HEADSET_ADAPTER` */
export const HEADSET_ADAPTER = FUNCTION_SUBCLASS_HEADSET_ADAPTER;
/** @deprecated Use `FUNCTION_SUBCLASS_SPEAKERPHONE` */
export const SPEAKERPHONE = FUNCTION_SUBCLASS_SPEAKERPHONE;
