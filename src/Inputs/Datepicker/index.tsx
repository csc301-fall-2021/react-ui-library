import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { CalendarAlt } from 'styled-icons/fa-solid/CalendarAlt';
import styled, { withTheme, DefaultTheme } from 'styled-components';
import { position, flex } from '@Utils/Mixins';
import { useTransition } from '@Utils/Hooks';
import { LabelLayout, LabelLayoutProps, InputFragment } from '@Layouts';
import { Datebox } from './Datebox';

const printDate = (date: Date): string => {
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();
    return `${month}-${day}-${year}`;
};

export interface DatepickerProps extends LabelLayoutProps {
    disabled?: boolean;
    placeholder?: string;
    onChange?: Function;
    theme: DefaultTheme;
    value?: Date;
}

const _Datepicker: React.FC<DatepickerProps> = ({
    value = new Date(),
    onChange = (): void => {},
    placeholder = 'MM-DD-YYYY',
    className,
    theme,
    ...props
}): React.ReactElement => {
    const [selectedDate, setDate] = useState(value);
    const dateText = useMemo((): string => printDate(value), [value]);
    const [show, setShow] = useState(false);
    const [text, setText] = useState(dateText);
    const [, mount, animate] = useTransition(show, {
        end: theme.speed.normal,
    });

    useEffect((): void => setDate(value), [value]);

    const handleText = useCallback((el): void => setText(el.target.value), [
        text,
    ]);

    const selectDate = useCallback((el): void => {
        const val = new Date(el.target.getAttribute('data'));
        el.target = {
            ...el.target,
            name: props.name,
            value: val,
        };
        onChange(el);
        setText(printDate(val));
        setShow(false);
    }, []);

    const changePage = useCallback(
        (change = 1): React.MouseEventHandler => (): void => {
            setDate(
                (d): Date => {
                    const curr = new Date(d);
                    curr.setMonth(curr.getMonth() + change);
                    return curr;
                },
            );
        },
        [],
    );

    const handleKeys = useCallback(
        (el): void => {
            const d = new Date(el.target.value);
            switch (el.key) {
                case 'Tab':
                    setShow(false);
                    break;
                case 'Enter':
                    el.target = {
                        ...el.target,
                        name: props.name,
                        value: d,
                    };

                    if (d.toDateString() === value.toDateString()) {
                        setShow((v): boolean => !v);
                    } else if (!Number.isNaN(d.getTime())) {
                        setText(printDate(d));
                        onChange(el);
                    }
                    break;
                default:
                    break;
            }
        },
        [value],
    );

    return (
        <LabelLayout {...props} className={className}>
            <Wrapper>
                <InputFragment
                    {...props}
                    placeholder={placeholder}
                    onChange={handleText}
                    onFocus={(): void => setShow(true)}
                    onKeyDown={handleKeys}
                    value={text}
                />
                <Icon />
            </Wrapper>
            {mount && (
                <Datebox
                    changePage={changePage}
                    selectedDate={selectedDate}
                    selectDate={selectDate}
                    animate={animate}
                    value={value}
                />
            )}
        </LabelLayout>
    );
};

export const Datepicker = withTheme(_Datepicker);

const Icon = styled(CalendarAlt)`
    ${position('absolute', 'auto 20px auto auto')}
    width: 10px;
`;

const Wrapper = styled.div`
    ${flex('column')}
    position: relative;
`;

export default Datepicker;
