import './index.css'

const TabItem = props => {
  const {tabDetails, setActiveTabId, isActive} = props
  const {tabId, displayText} = tabDetails
  const tabBtnClassName = isActive ? 'tab-button active' : 'tab-button'

  const onClickTab = () => {
    setActiveTabId(tabId)
  }

  return (
    <li className="tabs-item">
      <button className={tabBtnClassName} type="button" onClick={onClickTab}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
