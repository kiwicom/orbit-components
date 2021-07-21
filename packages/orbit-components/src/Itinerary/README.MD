# Itinerary

To implement the Itinerary component into your project you'll need to add the import:

```jsx
import Itinerary, {
  ItinerarySegment,
  ItinerarySegmentStop,
  ItinerarySegmentDetail,
} from "@kiwicom/orbit-components";
```

After adding import into your project you can use it simply like:

```jsx
<Itinerary>
  <ItinerarySegment spaceAfter="large">
    <ItinerarySegmentStop
      city="Moscow"
      station="Sheremetyevo International Airport (SVO)"
      date="Fri, 19.10"
      time="14:05"
    />
    <ItinerarySegmentDetail duration="2h 30m" summary={<BadgeGroup />}>
      <CollapsedContent />
    </ItinerarySegmentDetail>
    <ItinerarySegmentStop
      city="Prague"
      station="Václav Havel Airport Prague (PRG)"
      date="Fri, 19.10"
      time="16:35"
    />
  </ItinerarySegment>
</Itinerary>
```

## Props

| Name       | Type              | Required           | Default | Description                                                                                                                                                    |
| ---------- | ----------------- | ------------------ | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| children   | `React.ReactNode` | :heavy_check_mark: |         | The content of Itinerary component                                                                                                                             |
| dataTest   | `string`          |                    |         | Optional prop for testing purposes.                                                                                                                            |
| spaceAfter | `enum`            |                    |         | Additional `margin-bottom` after component. [See this docs](https://github.com/kiwicom/orbit/tree/master/packages/orbit-components/src/common/getSpacingToken) |

## ItinerarySegment

ItinerarySegment component serves as a wrapper of atomic units `ItinerarySegmentStop` and `ItinerarySegmentDetail, has status prop for showing important information about the connection between two segments of journey.

### Props

| Name       | Type                    | Required           | Default | Description                                                                                                                                                    |
| ---------- | ----------------------- | ------------------ | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| status     | [`Statuses`](#statuses) |                    |         | The status of ItinerarySegment                                                                                                                                 |
| label      | `React.ReactNode`       |                    |         | Status message of ItinerarySegment                                                                                                                             |
| children   | `React.ReactNode`       | :heavy_check_mark: |         | The content of ItinerarySegment                                                                                                                                |
| dataTest   | `string`                |                    |         | Optional prop for testing purposes.                                                                                                                            |
| spaceAfter | `enum`                  |                    |         | Additional `margin-bottom` after component. [See this docs](https://github.com/kiwicom/orbit/tree/master/packages/orbit-components/src/common/getSpacingToken) |

## ItinerarySegmentStop

ItinerarySegmentStop is an atomic unit of the Itinerary component, shows two locations, date and time, has warning property which changes the icon to `<AlertCircle color="warning" />` to attract user attention about some important information about journey.

### Props

| Name     | Type      | Required           | Default | Description                                                                                       |
| -------- | --------- | ------------------ | ------- | ------------------------------------------------------------------------------------------------- |
| date     | `string`  | :heavy_check_mark: |         | The date of ItinerarySegmentStop                                                                  |
| time     | `string`  | :heavy_check_mark: |         | The time of ItinerarySegmentStop                                                                  |
| city     | `string`  | :heavy_check_mark: |         | The city of ItinerarySegmentStop                                                                  |
| station  | `string`  | :heavy_check_mark: |         | The station of ItinerarySegmentStop                                                               |
| hidden   | `boolean` |                    |         | ItinerarySegmentStop which status is hidden                                                       |
| warning  | `boolean` |                    |         | Changes the icon of current ItinerarySegmentStop, if there is some important information for user |
| minWidth | `number`  |                    |         | sets min-width for first column with date and time                                                |

## ItinerarySegmentDetail

ItinerarySegmentDetail serves as connection between two ItinerarySegmentStop components (segments)

### Props

| Name     | Type              | Required           | Default      | Description                                                        |
| -------- | ----------------- | ------------------ | ------------ | ------------------------------------------------------------------ |
| summary  | `React.ReactNode` | :heavy_check_mark: |              | The content of ItineraryDetail component, when it's not expanded   |
| duration | `string`          | :heavy_check_mark: |              | The duration between two ItinerarySegmentStop components           |
| children | `React.ReactNode` | :heavy_check_mark: |              | The content of ItineraryDetail component, shown when it's expanded |
| icon     | `React.ReactNode` |                    | <Airplane /> | The icon of ItineraryDetail component                              |

### Statuses

| Statuses     |
| ------------ |
| `"warning"`  |
| `"critical"` |
