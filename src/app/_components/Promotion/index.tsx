'use client'
import React, { useEffect, useState } from 'react'

import classes from './index.module.scss'
import { HR } from '../HR'
import Link from 'next/link'

const Promotion = () => {
    const [time, setTime] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    })

    const targetDate = new Date()
    targetDate.setDate(targetDate.getDate() + 3)

    useEffect(() => {
        const timerInterval = setInterval(() => {
            const currentTime = new Date()
            const timeDifference = Math.max(Number(targetDate) - Number(currentTime), 0)

            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24))
            const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60))
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000)

            setTime({ days, hours, minutes, seconds })

            if (timeDifference === 0) {
                clearInterval(timerInterval)
                // You can add code here to handle what happens when the target date is reached.
            }
        }, 1000)

        return () => {
            clearInterval(timerInterval) // Cleanup the interval when the component unmounts.
        }
    }, [])

    return (
        <section className={classes.promotion}>
            <div className={classes.textBox}>
                <h3 className={classes.title}>DEAL OF THE MONTH</h3>
                <h5 className={classes.title}>
                    Unlock the melody of savings with our Deal of the Month! Dive into a symphony of discounts, where quality meets affordability. Don't miss out your passion for music while enjoying exclusive offers on top-notch instruments! 🎁🛒
                </h5>

                <ul className={classes.stats}>
                    <StatBox label="Days" value={time.days} />
                    <StatBox label="Hours" value={time.hours} />
                    <StatBox label="Minutes" value={time.minutes} />
                    <StatBox label="Seconds" value={time.seconds} />
                </ul>
            </div>
            <Link href="/products">
                <img src="../../../assets/images/promo+.jpg" className={classes.image} />
            </Link>

        </section>
    )
}

const StatBox = ({ label, value }: { label: string; value: number }) => (
    <li className={classes.statBox}>
        <h4>{value}</h4>
        <p>{label}</p>
    </li>
)

export default Promotion