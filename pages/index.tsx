import React from 'react';
import Section1 from '../components/Home/Section1';
import Section2 from '../components/Home/Section2';
import Section3 from '../components/Home/Section3';
import Section4 from '../components/Home/Section4';
import Section5 from '../components/Home/Section5';
import Divider from '../components/Divider';
const Index = (props: any) => {
    return (
        <div className="overflow-x-hidden">
            <Section1 />
            <Section2 />
            <Divider />
            <Section3 />
            <Section4 />
            <Section5 />
        </div>
    );
};

export default Index;
