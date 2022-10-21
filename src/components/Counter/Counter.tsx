import { useCallback, useMemo, FC, useEffect, memo } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { counterOptions } from '../../data/counterOptions';

import { decrement, increment, manageStepValue } from '../../store/counter/counter'

import { SelectOption, StoreType } from 'types/global'
import './Counter.style.css'

/**
 * Manage the counter
 * Components - Counter
 * @returns {JSX.Element}
 */
const Counter: FC = (): JSX.Element => {
    const dispatch = useDispatch()

    const { counter, step } = useSelector((state: StoreType) => state.counter)

    useEffect(() => {
        console.log(`Counter component is mounted at ${new Date()}`);
    }, [])

    useEffect(() => {
        if (counter === 20) {
            alert('Counter reached 20!!!!')
        }
    }, [counter])


    /**
     * Prepare the select options for counter step for drop-down
     */
    const prepareSelectOptions = useMemo(() => counterOptions.map(({ label, value }: SelectOption) => <option value={value} key={`select-option-${value}`}>{label}</option>), [])

    /**
     * Handle the step value for increment/decrement
     * @param {React.SyntheticEvent} event select element input change event
     */
    const handleSelectChange = useCallback((event: React.SyntheticEvent<HTMLSelectElement>) => {
        dispatch(manageStepValue({ step: Number(event.currentTarget.value) }))
    }, [dispatch])

    return (
        <div className='counter-container'>
            <div className='select-wrapper'>
                <select
                    name="step options"
                    id="stepper"
                    value={step}
                    onChange={handleSelectChange}
                >
                    {prepareSelectOptions}
                </select>
            </div>
            <div className='counter-wrapper'>
                <button onClick={() => dispatch(increment())}>+</button>
                <p>

                    {counter}
                </p>
                <button onClick={() => dispatch(decrement())}>-</button>

            </div>
        </div>
    )
}

export default memo(Counter);