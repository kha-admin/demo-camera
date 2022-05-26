import React from 'react';

const SelectSubdistrict: React.FC = () => {
    return (
        <div className="form-control w-full">
            <label className="label">
                <span className="label-text">ตำบล / เขต</span>
            </label>
            <select className="select select-bordered" defaultValue="default">
                <option disabled value="default">
                    เลือกตำบล / เขต
                </option>
                <option>Star Wars</option>
                <option>Harry Potter</option>
                <option>Lord of the Rings</option>
                <option>Planet of the Apes</option>
                <option>Star Trek</option>
            </select>
        </div>
    );
};

export default SelectSubdistrict;
