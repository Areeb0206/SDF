import React from 'react';
import Section1 from '../components/Home/Section1';
import Section2 from '../components/Home/Section2';
const Index = (props: any) => {
    return (
        <div className="overflow-x-hidden">
            <Section1 />
            <Section2 />
        </div>
    );
};

export default Index;
