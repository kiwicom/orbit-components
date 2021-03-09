# Itinerary

To implement the Itinerary component into your project you'll need to add the import:

```jsx
import Itinerary, {
  ItineraryPart,
  ItineraryPartPlace,
  ItineraryPartDetail,
} from "@kiwicom/orbit-components";
```

After adding import into your project you can use it simply like:

```jsx
<Itinerary>
  <ItineraryPart spaceAfter="large">
    <ItineraryPartPlace
      city="Moscow"
      place="Sheremetyevo International Airport (SVO)"
      date="Fri, 19.10"
      time="14:05"
    />
    <ItineraryPartDetail duration="2h 30m" summary={<BadgeGroup />}>
      <CollapsedContent />
    </ItineraryPartDetail>
    <ItineraryPartPlace
      city="Prague"
      place="Václav Havel Airport Prague (PRG)"
      date="Fri, 19.10"
      time="16:35"
    />
  </ItineraryPart>
</Itinerary>
```

## Props

| Name       | Type              | Required           | Default | Description                                                                                                                                                    |
| ---------- | ----------------- | ------------------ | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| children   | `React.ReactNode` | :heavy_check_mark: |         | The content of Itinerary component                                                                                                                             |
| dataTest   | `string`          |                    |         | Optional prop for testing purposes.                                                                                                                            |
| spaceAfter | `enum`            |                    |         | Additional `margin-bottom` after component. [See this docs](https://github.com/kiwicom/orbit/tree/master/packages/orbit-components/src/common/getSpacingToken) |

## ItineraryPart

ItineraryPart component serves as a wrapper of atomic units `ItineraryPartPlace` and `ItineraryPartDetail, has status prop for showing important information about the connection between two segments of journey.

### Props

| Name       | Type                    | Required           | Default | Description                                                                                                                                                    |
| ---------- | ----------------------- | ------------------ | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| status     | [`Statuses`](#statuses) |                    |         | The status of ItineraryPart                                                                                                                                    |
| label      | `React.ReactNode`       |                    |         | Status message of ItineraryPart                                                                                                                                |
| children   | `React.ReactNode`       | :heavy_check_mark: |         | The content of ItineraryPart                                                                                                                                   |
| dataTest   | `string`                |                    |         | Optional prop for testing purposes.                                                                                                                            |
| spaceAfter | `enum`                  |                    |         | Additional `margin-bottom` after component. [See this docs](https://github.com/kiwicom/orbit/tree/master/packages/orbit-components/src/common/getSpacingToken) |

## ItineraryPartPlace

ItineraryPartPlace is an atomic unit of the Itinerary component, shows two locations, date and time, has warning property which changes the icon to `<AlertCircle color="warning" />` to attract user attention about some important information about journey.

### Props

| Name     | Type      | Required           | Default | Description                                                                                     |
| -------- | --------- | ------------------ | ------- | ----------------------------------------------------------------------------------------------- |
| date     | `string`  | :heavy_check_mark: |         | The date of ItineraryPartPlace                                                                  |
| time     | `string`  | :heavy_check_mark: |         | The time of ItineraryPartPlace                                                                  |
| city     | `string`  | :heavy_check_mark: |         | The city of ItineraryPartPlace                                                                  |
| place    | `string`  | :heavy_check_mark: |         | The place of ItineraryPartPlace                                                                 |
| hidden   | `boolean` |                    |         | ItineraryPartPlace which status is hidden                                                       |
| warning  | `boolean` |                    |         | Changes the icon of current ItineraryPartPlace, if there is some important information for user |
| minWidth | `number`  |                    |         | sets min-width for first column with date and time                                              |

## ItineraryPartDetail

ItineraryPartDetail serves as connection between two ItineraryPartPlace components (segments)

### Props

| Name     | Type              | Required           | Default      | Description                                                        |
| -------- | ----------------- | ------------------ | ------------ | ------------------------------------------------------------------ |
| summary  | `React.ReactNode` | :heavy_check_mark: |              | The content of ItineraryDetail component, when it's not expanded   |
| duration | `string`          | :heavy_check_mark: |              | The duration between two ItineraryPartPlace components             |
| children | `React.ReactNode` | :heavy_check_mark: |              | The content of ItineraryDetail component, shown when it's expanded |
| icon     | `React.ReactNode` |                    | <Airplane /> | The icon of ItineraryDetail component                              |

### Statuses

| Statuses     |
| ------------ |
| `"warning"`  |
| `"critical"` |
