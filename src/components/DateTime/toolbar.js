import React, { useState } from 'react'
import PickerToolbar from '@material-ui/pickers/_shared/PickerToolbar'
import { Text } from '../Typography/index'
import { Button } from '../Button/index'
import { makeStyles } from '@material-ui/core'
import { convertToMeridiem } from '@material-ui/pickers/_helpers/time-utils'
import MomentUtils from '@date-io/moment'

export const useStyles = makeStyles({
  toolbar: {
    justifyContent: 'space-between',
    borderBottom: `1px solid var(--border-color-1)`,
    background: '#fff',
    margin: '0 -24px',
  },
  timeContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  dateContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  separator: {
    margin: '8px 0 0 0',
    cursor: 'default',
    fontSize: 24,
  },
  meridiemContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
    width: '100%',
  },
})

const ToolbarComponent = function (props) {
  const { date, isLandscape, openView, setOpenView, title, ampm, onChange, toolbarType } = props
  const hours = date.hour()
  const [meridiemMode, setMeridiemMode] = useState(hours < 12 ? 'am' : 'pm')

  const handleChangeViewClick = (view) => (e) => {
    setOpenView(view)
  }

  const classes = useStyles()

  const handleMeridiemChange = (mode) => {
    setMeridiemMode(mode)
    const utils = new MomentUtils()
    const timeWithMeridiem = convertToMeridiem(date, mode, Boolean(ampm), utils)
    onChange(timeWithMeridiem, false)
  }

  return (
    <PickerToolbar className={classes.toolbar} title={title} isLandscape={isLandscape}>
      {toolbarType.includes('date') && (
        <div className={classes.dateContainer}>
          <Button
            textType="large-title"
            className="date-select"
            textColor="primary-color"
            variant="primary"
            onClick={handleChangeViewClick('date')}
            selected={openView === 'date'}
            label={date.format('MMM D')}
          />
          <div className={classes.spacing}>
            <Button
              textColor="gray-2"
              textType="headline"
              onClick={handleChangeViewClick('year')}
              label={date.format('YYYY')}
              selected={openView === 'year'}
            />
          </div>
        </div>
      )}
      {toolbarType.includes('time') && (
        <div className={classes.timeContainer}>
          <div style={{ display: 'flex' }}>
            <Button
              textType="title-1"
              textColor={openView === 'hours' && 'primary-color'}
              onClick={() => setOpenView('hours')}
              selected={openView === 'hours'}
              label={date ? date.format(ampm ? 'hh' : 'HH') : '--'}
              style={{ minWidth: 30 }}
            />
            <Text className={classes.separator}>:</Text>
            <Button
              textType="title-1"
              textColor={openView === 'minutes' && 'primary-color'}
              onClick={() => setOpenView('minutes')}
              selected={openView === 'minutes'}
              label={date ? date.format('mm') : '--'}
              style={{ minWidth: 30 }}
            />
            {/* Comment this out when we roll out "seconds" as well */}
            {/* <Text className={classes.separator}>:</Text>
            <Button
              textType="title-1"
              onClick={() => setOpenView('seconds')}
              selected={openView === 'seconds'}
              label={date ? date.format('ss') : '--'}
            /> */}
          </div>
          {ampm && (
            <div className={classes.meridiemContainer}>
              <Button
                textType="body"
                textColor={meridiemMode === 'am' ? 'primary-color' : 'gray-2'}
                label={'AM'}
                onClick={() => handleMeridiemChange('am')}
                style={{ minWidth: 30 }}
              />
              <Button
                textType="body"
                textColor={meridiemMode === 'pm' ? 'primary-color' : 'gray-2'}
                label={'PM'}
                onClick={() => handleMeridiemChange('pm')}
                style={{ minWidth: 30 }}
              />
            </div>
          )}
        </div>
      )}
    </PickerToolbar>
  )
}

export default ToolbarComponent
