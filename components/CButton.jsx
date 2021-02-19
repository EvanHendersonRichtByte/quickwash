import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

export default function CButton(props) {
  /**
   * Params
   * Color : Custom Color (Hex/RGB)
   * Type : Outline / Unspecified(Default)
   */

  return (
    <TouchableOpacity style={styleButtonAdjustor(props)} color={props.color}>
      <Text style={styleTextAdjustor(props)}>{props.title}</Text>
    </TouchableOpacity>
  );
}

const styleButtonAdjustor = (props) => {
  const style = StyleSheet.create({
    default: {
      backgroundColor: props.color,
      borderRadius: 5,
      padding: 15,
    },
    outline: {
      borderWidth: 1,
      borderRadius: 5,
      borderColor: props.color,
      padding: 15,
    },
  });

  if (props.type === "outline") {
    return style.outline;
  } else {
    return style.default;
  }
};

const styleTextAdjustor = (props) => {
  const textDefault = props.textColor || "#FFF";
  const textOutline = props.textColor || props.color;

  const style = StyleSheet.create({
    default: { color: textDefault, textAlign: "center" },
    outline: { color: textOutline, textAlign: "center" },
  });

  if (props.type === "outline") {
    return style.outline;
  } else {
    return style.default;
  }
};
