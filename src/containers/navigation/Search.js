import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { List, TextInput, TimePicker } from "../../components/controls";
import { useTranslation } from "react-i18next";
import stations from "../../config/stations";
import { connect, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import * as navigationActions from "../../store/modules/navigation";
import PropTypes from "prop-types";
import { requestUncrowdedRoute } from "../../API";

const Search = ({ ...props }) => {
  const [startSuggestion, setStartSuggestion] = useState([]);
  const [endSuggestion, setEndSuggestion] = useState([]);
  const [startPositionText, setStartPositionText] = useState("");
  const [endPositionText, setEndPositionText] = useState("");
  const [departureTime, setDepartureTime] = useState("");
  const startPosition = useSelector((state) => state.navigation.startPosition);
  const endPosition = useSelector((state) => state.navigation.endPosition);

  const { t } = useTranslation();

  function searchSuggestion(e, division) {
    const val = e.target.value;
    if (division === "start") {
      setStartSuggestion(
        Object.keys(stations)
          .map((st) => {
            if (
              stations[st].name.includes(val) ||
              stations[st].eng_name.includes(val)
            )
              return {
                id: st,
                title: `${stations[st].name} | ${stations[st].eng_name}`,
              };
            return null;
          })
          .filter((item) => item != null)
      );
    } else if (division === "end") {
      setEndSuggestion(
        Object.keys(stations)
          .map((st) => {
            if (
              stations[st].name.includes(val) ||
              stations[st].eng_name.includes(val)
            )
              return {
                id: st,
                title: `${stations[st].name} | ${stations[st].eng_name}`,
              };
            return null;
          })
          .filter((item) => item != null)
      );
    }
  }

  async function searchRoute() {
    const { NavigationActions } = props;
    const result = await requestUncrowdedRoute(
      startPosition.id,
      endPosition.id,
      departureTime
    );
    NavigationActions.setResult(result);
  }

  function startInputFocused() {
    setEndSuggestion([]);
  }

  function endInputFocused() {
    setStartSuggestion([]);
  }

  function onSelectStartPosition(item) {
    const { NavigationActions } = props;
    NavigationActions.setStartPosition(item);
  }

  function onSelectEndPosition(item) {
    const { NavigationActions } = props;
    NavigationActions.setEndPosition(item);
  }

  function onTimeChange(e) {
    setDepartureTime(e.target.value);
  }

  useEffect(() => {
    setStartPositionText(startPosition.title);
    setStartSuggestion([]);
  }, [startPosition]);

  useEffect(() => {
    setEndPositionText(endPosition.title);
    setEndSuggestion([]);
  }, [endPosition]);

  return (
    <Wrapper>
      <InnerWrapper>
        <FormWrapper>
          <TextInput
            placeholder={t("from")}
            value={startPositionText}
            onChange={(e) => {
              setStartPositionText(e.target.value);
              if (e.target.value.length === 0) setStartSuggestion([]);
              else searchSuggestion(e, "start");
            }}
            onFocus={startInputFocused.bind(this)}
          />
          <AutoCompleteWrapper>
            <AutoComplete>
              {startSuggestion.length > 0 && (
                <List
                  items={startSuggestion}
                  onSelect={onSelectStartPosition.bind(this)}
                />
              )}
            </AutoComplete>
          </AutoCompleteWrapper>
          <TextInput
            placeholder={t("to")}
            value={endPositionText}
            onChange={(e) => {
              setEndPositionText(e.target.value);
              if (e.target.value.length === 0) setEndSuggestion([]);
              else searchSuggestion(e, "end");
            }}
            onFocus={endInputFocused.bind(this)}
          />
          <AutoCompleteWrapper>
            <AutoComplete>
              {endSuggestion.length > 0 && (
                <List
                  items={endSuggestion}
                  onSelect={onSelectEndPosition.bind(this)}
                />
              )}
            </AutoComplete>
          </AutoCompleteWrapper>
        </FormWrapper>
        <Button
          className={(startPosition === "" || endPosition === "") && "disabled"}
          disabled={startPosition === "" || endPosition === ""}
          onClick={searchRoute.bind(this)}
        >
          {t("search")}
        </Button>
      </InnerWrapper>
      <TimePicker onChange={onTimeChange.bind(this)} />
    </Wrapper>
  );
};

const mapStateToProps = ({ navigation }) => ({
  startPosition: navigation.startPosition,
  endPosition: navigation.endPosition,
});

const mapDispatchToProps = (dispatch) => ({
  NavigationActions: bindActionCreators(navigationActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);

const Wrapper = styled.div``;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 5px;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
`;

const Button = styled.button`
  width: 25%;
  border: none;
  background-color: rgb(0, 127, 255);
  color: white;
  font-weight: 700;
  font-size: 12pt;
  cursor: pointer;

  &:focus {
    outline: none;
  }
  &:hover {
    background-color: rgb(50, 137, 255);
  }

  &.disabled {
    background-color: gray;
  }

  .disabled:hover {
    clear: initial;
  }
`;

const AutoCompleteWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const AutoComplete = styled.div`
  position: absolute;
  width: 100%;
  z-index: 150;
`;

Search.propTypes = {
  NavigationActions: PropTypes.any,
  startPosition: PropTypes.string,
  endPosition: PropTypes.string,
};
