import React, { useState } from 'react';
import styled from 'styled-components';
import Draggable from 'react-draggable';
import { ISquareTable, SquareTable } from '@Containers/SquareTable/SquareTable';
import { CircleTable, ICircleTable } from '@Containers/CircleTable/CircleTable';

type getTableComponentType = () => JSX.Element;

type tableInputType = ISquareTable | ICircleTable;

export interface IDraggableTable {
    /**
     * The input for the DraggableTable
     */
    tableInput: tableInputType;
    /**
     * The starting coordinates on the canvas for the table
     */
    defaultXY: { x: number; y: number };
}

/**
 * Primary UI component for user interaction
 * EditDraggableCanvas
 */
export const DraggableTable: React.FC<IDraggableTable> = ({
    tableInput = {
        tableShape: 'Circle',
        tableID: 'T1',
        partyName: '',
        occupancyStatus: 'Vacant',
        relativeSize: 0.25,
        chairs: [
            {
                position: 'top',
                isSeated: false,
                occupiedBy: '',
                isVisible: true,
                relativeSize: 1,
                tableUse: 'TableForManagement',
            },
            {
                position: 'bottom',
                isSeated: false,
                occupiedBy: '',
                isVisible: true,
                relativeSize: 1,
                tableUse: 'TableForManagement',
            },
        ],
        tableUse: 'TableForManagement',
    },
    defaultXY = { x: 50, y: 24 },
    ...props
}) => {
    const [deltaPosition, setDeltaPosition] = useState({
        x: 0,
        y: 0,
    });

    const handleDrag = (e: Event, ui: { deltaX: number; deltaY: number }) => {
        const { x, y } = deltaPosition;
        setDeltaPosition({
            x: x + ui.deltaX,
            y: y + ui.deltaY,
        });
    };

    const dragHandlers = {
        handleDrag,
    };

    /**
     * Returns a JSX element with the correct component based on whether the
     * TableInput is an ISquareTable or an ICircleTable
     * @returns {JSX.Element} the correct JSX.Element for the Table component
     */
    const getTableComponent: getTableComponentType = () => {
        switch (tableInput.tableShape) {
            case 'Square':
                return (
                    <SquareTable
                        tableShape={tableInput.tableShape}
                        tableID={tableInput.tableID}
                        partyName={tableInput.partyName}
                        isSquare={tableInput.isSquare}
                        occupancyStatus={tableInput.occupancyStatus}
                        relativeSize={tableInput.relativeSize}
                        chairs={tableInput.chairs}
                        tableUse={tableInput.tableUse}
                    />
                );
            case 'Circle':
                return (
                    <CircleTable
                        tableShape={tableInput.tableShape}
                        tableID={tableInput.tableID}
                        partyName={tableInput.partyName}
                        occupancyStatus={tableInput.occupancyStatus}
                        relativeSize={tableInput.relativeSize}
                        chairs={tableInput.chairs}
                        tableUse={tableInput.tableUse}
                    />
                );
            default:
                return <div />;
        }
    };

    return (
        <Draggable
            bounds="parent"
            {...dragHandlers}
            defaultPosition={{ x: defaultXY.x, y: defaultXY.y }}
        >
            <TableWidthWrapper>{getTableComponent()}</TableWidthWrapper>
        </Draggable>
    );
};

const TableWidthWrapper = styled.div`
    width: 123px;
`;
