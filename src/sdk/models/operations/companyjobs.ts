/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";

export class CompanyJobsRequest extends SpeakeasyBase {
  /**
   * ID of the company
   */
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  /**
   * The offset number to start at
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=offset",
  })
  offset?: string;

  /**
   * Number of results per page (0-100)
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=per_page",
  })
  perPage?: string;
}

export class CompanyJobsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
