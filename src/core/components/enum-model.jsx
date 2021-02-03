import React from "react"
import ImPropTypes from "react-immutable-proptypes"

const EnumModel = ({ value, desc, getComponent }) => {
  let ModelCollapse = getComponent("ModelCollapse")
  let collapsedContent = <span>Array [ { value.count() } ]</span>
  return <span className="prop-enum">
    Enum:<br />
    <ModelCollapse collapsedContent={ collapsedContent }>
      <pre>
      { JSON.stringify(desc, null, '  ') }
      </pre>
    </ModelCollapse>
  </span>
}
EnumModel.propTypes = {
  value: ImPropTypes.iterable,
  desc: ImPropTypes.map,
  getComponent: ImPropTypes.func
}

export default EnumModel