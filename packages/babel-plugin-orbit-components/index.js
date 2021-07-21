/* eslint-disable no-param-reassign */

/**
 * Usually, we take the destructed component name and append it after `/libs/` like so:
 *
 *     import { Alert } from "@kiwicom/orbit-components";
 *          ↓ ↓ ↓ ↓ ↓ ↓
 *     import Alert from "@kiwicom/orbit-components/lib/Alert";
 *
 * However, there are some exceptions which we have to handle manually and change the resulting
 * output. The following configuration maps destructed component to the new path (appended to libs).
 */

const pathOverwrites = {
  AlertButton: "Alert/AlertButton",
  BadgePrimitive: "primitives/BadgePrimitive",
  BadgeListItem: "BadgeList/BadgeListItem",
  BreadcrumbsItem: "Breadcrumbs/BreadcrumbsItem",
  ButtonPrimitive: "primitives/ButtonPrimitive",
  CardContent: "Card/CardContent", // TODO: doesn't exist anymore (?)
  CardHeader: "Card/CardHeader",
  CardSection: "Card/CardSection",
  calculateCountOf: "Slider/utils/calculateCountOf",
  AccordionSection: "Accordion/AccordionSection",
  DeprecatedCardHeader: "deprecated/Card/CardHeader",
  DeprecatedCard: "deprecated/Card",
  DeprecatedSeat: "deprecated/Seat",
  DeprecatedCardSection: "deprecated/Card/CardSection",
  DestinationCard: "deprecated/DestinationCard",
  DestinationHeader: "deprecated/DestinationHeader",
  Grid: "utils/Grid",
  Icons: "icons",
  IllustrationPrimitive: "primitives/IllustrationPrimitive",
  InputStepperStateless: "InputStepper/InputStepperStateless",
  ItinerarySegment: "Itinerary/ItinerarySegment",
  ItinerarySegmentDetail: "Itinerary/ItinerarySegment/ItinerarySegmentDetail",
  ItinerarySegmentStop: "Itinerary/ItinerarySegment/ItinerarySegmentStop",
  LayoutColumn: "Layout/LayoutColumn",
  ListItem: "List/ListItem",
  mediaQueries: "utils/mediaQuery",
  ModalFooter: "Modal/ModalFooter",
  ModalHeader: "Modal/ModalHeader",
  ModalSection: "Modal/ModalSection",
  NavigationDrawer: "Drawer",
  PricingTableItem: "PricingTable/PricingTableItem",
  SmartPassV1: "SmartPassIllustrations/illustrations/SmartPassV1",
  SmartPassV2: "SmartPassIllustrations/illustrations/SmartPassV2",
  SmartPassV3: "SmartPassIllustrations/illustrations/SmartPassV3",
  SmartPassV4: "SmartPassIllustrations/illustrations/SmartPassV4",
  SmartPassV5: "SmartPassIllustrations/illustrations/SmartPassV5",
  StepperStateless: "Stepper/StepperStateless",
  TableBody: "Table/TableBody",
  TableCell: "Table/TableCell",
  TableFooter: "Table/TableFooter",
  TableHead: "Table/TableHead",
  TableRow: "Table/TableRow",
  TripDate: "deprecated/TripSector/TripDate",
  TripLayover: "deprecated/TripSector/TripLayover",
  TripSector: "deprecated/TripSector",
  TripSegment: "deprecated/TripSegment",
  TimelineStep: "Timeline/TimelineStep",
  SeatLegend: "Seat/components/SeatLegend",
  WizardStep: "Wizard/WizardStep",
  useMediaQuery: "hooks/useMediaQuery",
  useLockScrolling: "hooks/useLockScrolling",
};

const parsedImportPaths = [
  "@kiwicom/orbit-components",
  "@kiwicom/orbit-components/lib/icons",
  "@kiwicom/orbit-components/icons",
];

module.exports = function orbitComponents(babel) {
  const t = babel.types;

  return {
    visitor: {
      ImportDeclaration: function ImportDeclaration(path) {
        if (parsedImportPaths.indexOf(path.node.source.value) === -1) {
          // ignore unknown paths
          return;
        }

        if (path.node.specifiers.filter(t.isImportSpecifier).length === 0) {
          return;
        }

        path.node.specifiers.forEach(function specFn(spec) {
          let importedPath = path.node.source.value;

          if (t.isImportSpecifier(spec)) {
            const importedName = spec.imported.name;
            spec = t.importDefaultSpecifier(t.identifier(spec.local.name));
            const isIcon = importedPath.includes("icons");
            // icons will already have /lib in the name, this adds the /lib to normal components
            if (!importedPath.includes("/lib")) {
              if (isIcon) {
                importedPath = importedPath.replace("icons", "lib/icons");
              } else {
                importedPath += "/lib";
              }
            }

            if (pathOverwrites[importedName] && !isIcon) {
              // Currently there are only overrides for non icons
              importedPath += `/${pathOverwrites[importedName]}`;
            } else {
              importedPath += `/${importedName}`;
            }
          }

          path.insertAfter(t.importDeclaration([spec], t.stringLiteral(importedPath)));
        });

        path.remove();
      },
    },
  };
};
