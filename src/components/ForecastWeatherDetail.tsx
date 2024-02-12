import React from "react";
import Container from "./Container";
import WeatherDetails, { WeatherDetailProps } from "./WeatherDetails";
import WeatherIcon from "./WeatherIcon";
import { convertKelvinToCelsius } from "@/utils/convertKelvinToCelsius";

type Props = {};

export interface ForecastWeatherDetailProps extends WeatherDetailProps {
  weatherIcon: string;
  date: string;
  day: string;
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  description: string;
}

export default function ForecastWeatherDetail(
  props: ForecastWeatherDetailProps
) {
  const {
    weatherIcon = "02d",
    date = "19.09",
    day = "Tuesday",
    temp,
    feels_like,
    temp_min,
    temp_max,
    description,
  } = props;
  return (
    <Container className="gap-4">
      {/* left */}
      <section className=" flex gap-4 items-center px-4">
        <WeatherIcon iconName={weatherIcon} />
        <p>{date}</p>
        <p className="text-sm">{day}</p>
        <div className="flex flex-col px-4">
          <span className="text-5xl">{convertKelvinToCelsius(temp ?? 0)}°</span>
        </div>
      </section>
      {/* right */}
      <section className=" overflow-x-auto flex justify-between gap-4 px-4 w-full pr-10">
        <WeatherDetails {...props} />
      </section>
    </Container>
  );
}
