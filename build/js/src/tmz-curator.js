/**
 * DO NOT EDIT THIS FILE as it will be overwritten by the Pbj compiler.
 * @link https://github.com/gdbots/pbjc-php
 *
 * Registers all of the pbj schemas with the MessageResolver.
 *
 * @link http://schemas.tmz.com/
 */

import MessageResolver from '@gdbots/pbj/MessageResolver';
import '@tmz/schemas/tmz/curator/command/CreateGalleryV1';
import '@tmz/schemas/tmz/curator/command/CreatePromotionV1';
import '@tmz/schemas/tmz/curator/command/CreateTeaserV1';
import '@tmz/schemas/tmz/curator/command/CreateTimelineV1';
import '@tmz/schemas/tmz/curator/command/CreateWidgetV1';
import '@tmz/schemas/tmz/curator/command/DeleteGalleryV1';
import '@tmz/schemas/tmz/curator/command/DeletePromotionV1';
import '@tmz/schemas/tmz/curator/command/DeleteTeaserV1';
import '@tmz/schemas/tmz/curator/command/DeleteTimelineV1';
import '@tmz/schemas/tmz/curator/command/DeleteWidgetV1';
import '@tmz/schemas/tmz/curator/command/ExpireGalleryV1';
import '@tmz/schemas/tmz/curator/command/ExpirePromotionV1';
import '@tmz/schemas/tmz/curator/command/ExpireTeaserV1';
import '@tmz/schemas/tmz/curator/command/ExpireTimelineV1';
import '@tmz/schemas/tmz/curator/command/MarkGalleryAsDraftV1';
import '@tmz/schemas/tmz/curator/command/MarkGalleryAsPendingV1';
import '@tmz/schemas/tmz/curator/command/MarkPromotionAsDraftV1';
import '@tmz/schemas/tmz/curator/command/MarkPromotionAsPendingV1';
import '@tmz/schemas/tmz/curator/command/MarkTeaserAsDraftV1';
import '@tmz/schemas/tmz/curator/command/MarkTeaserAsPendingV1';
import '@tmz/schemas/tmz/curator/command/MarkTimelineAsDraftV1';
import '@tmz/schemas/tmz/curator/command/MarkTimelineAsPendingV1';
import '@tmz/schemas/tmz/curator/command/PublishGalleryV1';
import '@tmz/schemas/tmz/curator/command/PublishPromotionV1';
import '@tmz/schemas/tmz/curator/command/PublishTeaserV1';
import '@tmz/schemas/tmz/curator/command/PublishTimelineV1';
import '@tmz/schemas/tmz/curator/command/RenameGalleryV1';
import '@tmz/schemas/tmz/curator/command/RenameTimelineV1';
import '@tmz/schemas/tmz/curator/command/SyncTeaserV1';
import '@tmz/schemas/tmz/curator/command/UnpublishGalleryV1';
import '@tmz/schemas/tmz/curator/command/UnpublishPromotionV1';
import '@tmz/schemas/tmz/curator/command/UnpublishTeaserV1';
import '@tmz/schemas/tmz/curator/command/UnpublishTimelineV1';
import '@tmz/schemas/tmz/curator/command/UpdateGalleryV1';
import '@tmz/schemas/tmz/curator/command/UpdatePromotionV1';
import '@tmz/schemas/tmz/curator/command/UpdateTeaserV1';
import '@tmz/schemas/tmz/curator/command/UpdateTimelineV1';
import '@tmz/schemas/tmz/curator/command/UpdateWidgetV1';
import '@tmz/schemas/tmz/curator/event/GalleryCreatedV1';
import '@tmz/schemas/tmz/curator/event/GalleryDeletedV1';
import '@tmz/schemas/tmz/curator/event/GalleryExpiredV1';
import '@tmz/schemas/tmz/curator/event/GalleryMarkedAsDraftV1';
import '@tmz/schemas/tmz/curator/event/GalleryMarkedAsPendingV1';
import '@tmz/schemas/tmz/curator/event/GalleryPublishedV1';
import '@tmz/schemas/tmz/curator/event/GalleryRenamedV1';
import '@tmz/schemas/tmz/curator/event/GalleryScheduledV1';
import '@tmz/schemas/tmz/curator/event/GalleryUnpublishedV1';
import '@tmz/schemas/tmz/curator/event/GalleryUpdatedV1';
import '@tmz/schemas/tmz/curator/event/PromotionCreatedV1';
import '@tmz/schemas/tmz/curator/event/PromotionDeletedV1';
import '@tmz/schemas/tmz/curator/event/PromotionExpiredV1';
import '@tmz/schemas/tmz/curator/event/PromotionMarkedAsDraftV1';
import '@tmz/schemas/tmz/curator/event/PromotionMarkedAsPendingV1';
import '@tmz/schemas/tmz/curator/event/PromotionPublishedV1';
import '@tmz/schemas/tmz/curator/event/PromotionScheduledV1';
import '@tmz/schemas/tmz/curator/event/PromotionUnpublishedV1';
import '@tmz/schemas/tmz/curator/event/PromotionUpdatedV1';
import '@tmz/schemas/tmz/curator/event/TeaserCreatedV1';
import '@tmz/schemas/tmz/curator/event/TeaserDeletedV1';
import '@tmz/schemas/tmz/curator/event/TeaserExpiredV1';
import '@tmz/schemas/tmz/curator/event/TeaserMarkedAsDraftV1';
import '@tmz/schemas/tmz/curator/event/TeaserMarkedAsPendingV1';
import '@tmz/schemas/tmz/curator/event/TeaserPublishedV1';
import '@tmz/schemas/tmz/curator/event/TeaserScheduledV1';
import '@tmz/schemas/tmz/curator/event/TeaserUnpublishedV1';
import '@tmz/schemas/tmz/curator/event/TeaserUpdatedV1';
import '@tmz/schemas/tmz/curator/event/TimelineCreatedV1';
import '@tmz/schemas/tmz/curator/event/TimelineDeletedV1';
import '@tmz/schemas/tmz/curator/event/TimelineExpiredV1';
import '@tmz/schemas/tmz/curator/event/TimelineMarkedAsDraftV1';
import '@tmz/schemas/tmz/curator/event/TimelineMarkedAsPendingV1';
import '@tmz/schemas/tmz/curator/event/TimelinePublishedV1';
import '@tmz/schemas/tmz/curator/event/TimelineRenamedV1';
import '@tmz/schemas/tmz/curator/event/TimelineScheduledV1';
import '@tmz/schemas/tmz/curator/event/TimelineUnpublishedV1';
import '@tmz/schemas/tmz/curator/event/TimelineUpdatedV1';
import '@tmz/schemas/tmz/curator/event/WidgetCreatedV1';
import '@tmz/schemas/tmz/curator/event/WidgetDeletedV1';
import '@tmz/schemas/tmz/curator/event/WidgetUpdatedV1';
import '@tmz/schemas/tmz/curator/node/ArticleTeaserV1';
import '@tmz/schemas/tmz/curator/node/BlogrollWidgetV1';
import '@tmz/schemas/tmz/curator/node/CarouselWidgetV1';
import '@tmz/schemas/tmz/curator/node/CategoryTeaserV1';
import '@tmz/schemas/tmz/curator/node/ChannelTeaserV1';
import '@tmz/schemas/tmz/curator/node/CodeWidgetV1';
import '@tmz/schemas/tmz/curator/node/GalleryV1';
import '@tmz/schemas/tmz/curator/node/GalleryTeaserV1';
import '@tmz/schemas/tmz/curator/node/GridlerWidgetV1';
import '@tmz/schemas/tmz/curator/node/HeroBarWidgetV1';
import '@tmz/schemas/tmz/curator/node/LinkTeaserV1';
import '@tmz/schemas/tmz/curator/node/PageTeaserV1';
import '@tmz/schemas/tmz/curator/node/PersonTeaserV1';
import '@tmz/schemas/tmz/curator/node/PollTeaserV1';
import '@tmz/schemas/tmz/curator/node/PromotionV1';
import '@tmz/schemas/tmz/curator/node/ShowtimesWidgetV1';
import '@tmz/schemas/tmz/curator/node/SliderWidgetV1';
import '@tmz/schemas/tmz/curator/node/SpotlightWidgetV1';
import '@tmz/schemas/tmz/curator/node/TagCloudWidgetV1';
import '@tmz/schemas/tmz/curator/node/TetrisWidgetV1';
import '@tmz/schemas/tmz/curator/node/TimelineV1';
import '@tmz/schemas/tmz/curator/node/TimelineTeaserV1';
import '@tmz/schemas/tmz/curator/node/VideoTeaserV1';
import '@tmz/schemas/tmz/curator/node/YoutubeVideoTeaserV1';
import '@tmz/schemas/tmz/curator/request/GetGalleryHistoryRequestV1';
import '@tmz/schemas/tmz/curator/request/GetGalleryHistoryResponseV1';
import '@tmz/schemas/tmz/curator/request/GetGalleryRequestV1';
import '@tmz/schemas/tmz/curator/request/GetGalleryResponseV1';
import '@tmz/schemas/tmz/curator/request/GetPromotionHistoryRequestV1';
import '@tmz/schemas/tmz/curator/request/GetPromotionHistoryResponseV1';
import '@tmz/schemas/tmz/curator/request/GetPromotionRequestV1';
import '@tmz/schemas/tmz/curator/request/GetPromotionResponseV1';
import '@tmz/schemas/tmz/curator/request/GetTeaserHistoryRequestV1';
import '@tmz/schemas/tmz/curator/request/GetTeaserHistoryResponseV1';
import '@tmz/schemas/tmz/curator/request/GetTeaserRequestV1';
import '@tmz/schemas/tmz/curator/request/GetTeaserResponseV1';
import '@tmz/schemas/tmz/curator/request/GetTimelineHistoryRequestV1';
import '@tmz/schemas/tmz/curator/request/GetTimelineHistoryResponseV1';
import '@tmz/schemas/tmz/curator/request/GetTimelineRequestV1';
import '@tmz/schemas/tmz/curator/request/GetTimelineResponseV1';
import '@tmz/schemas/tmz/curator/request/GetWidgetHistoryRequestV1';
import '@tmz/schemas/tmz/curator/request/GetWidgetHistoryResponseV1';
import '@tmz/schemas/tmz/curator/request/GetWidgetRequestV1';
import '@tmz/schemas/tmz/curator/request/GetWidgetResponseV1';
import '@tmz/schemas/tmz/curator/request/RenderPromotionRequestV1';
import '@tmz/schemas/tmz/curator/request/RenderPromotionResponseV1';
import '@tmz/schemas/tmz/curator/request/RenderWidgetRequestV1';
import '@tmz/schemas/tmz/curator/request/RenderWidgetResponseV1';
import '@tmz/schemas/tmz/curator/request/SearchGalleriesRequestV1';
import '@tmz/schemas/tmz/curator/request/SearchGalleriesResponseV1';
import '@tmz/schemas/tmz/curator/request/SearchPromotionsRequestV1';
import '@tmz/schemas/tmz/curator/request/SearchPromotionsResponseV1';
import '@tmz/schemas/tmz/curator/request/SearchTeasersRequestV1';
import '@tmz/schemas/tmz/curator/request/SearchTeasersResponseV1';
import '@tmz/schemas/tmz/curator/request/SearchTimelinesRequestV1';
import '@tmz/schemas/tmz/curator/request/SearchTimelinesResponseV1';
import '@tmz/schemas/tmz/curator/request/SearchWidgetsRequestV1';
import '@tmz/schemas/tmz/curator/request/SearchWidgetsResponseV1';

export default MessageResolver;
