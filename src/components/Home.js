import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
    return (
        <Container>
            <Section
                title='Model S'
                description='Order Online For Touchless Delivery'
                backgroundImg='model-s.jpg'
                leftBtnText='Custom Order'
                rightBtnText='Existing Inventory'
            />
            <Section
                title='Model Y'
                description='Order Online For Touchless Delivery'
                backgroundImg='model-y.jpg'
                leftBtnText='Custom Order'
                rightBtnText='Existing Inventory'
            />
            <Section
                title='Model 3'
                description='Order Online For Touchless Delivery'
                backgroundImg='model-3.jpg'
                leftBtnText='Custom Order'
                rightBtnText='Existing Inventory'
            />
            <Section
                title='Model X'
                description='Order Online For Touchless Delivery'
                backgroundImg='model-x.jpg'
                leftBtnText='Custom Order'
                rightBtnText='Existing Inventory'
            />
            <Section
                title='Lowest Cost Solar Panels in America'
                description='Money-Back guarantee'
                backgroundImg='solar-panel.jpg'
                leftBtnText='Order now'
                rightBtnText='Learn more'
            />
            <Section
                title='Solar For New Roofs'
                description='Solar Roofs Costs Less Then a New Roofs Plus Solar Panels'
                backgroundImg='solar-roof.jpg'
                leftBtnText='Custom Order'
                rightBtnText='Existing Inventory'
            />
            <Section
                title='Accessories'
                description=''
                backgroundImg='accessories.jpg'
                leftBtnText='Shop now'
                rightBtnText=''
            />

        </Container>
    )
}

export default Home


const Container = styled.div`
    height: 100vh;

`